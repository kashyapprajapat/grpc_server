const PROTO_PATH = "./proto/user.proto";

import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const userProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

let Users = [
    {
        name: "Kashyap",
        email: "prajaptaikashyap14@gmail.com",
        age: 27
    },
    {
        name: "Parth",
        email: "prajaptaiparth009@gmail.com",
        age: 18
    }
];

server.addService(userProto.Userservice.service, {
    getUsers: (_, callback) => {
        callback(null, { users: Users }); 
    },
    addUser: (call, callback) => {  
        const user = call.request;
        Users.push(user);
        callback(null, user);
    },
    updateUser: (call, callback) => {
        const { email, newUser } = call.request;
        const index = Users.findIndex(user => user.email === email);
        
        if (index === -1) {
            return callback({
                code: grpc.status.NOT_FOUND,
                details: "User not found"
            });
        }

        Users[index] = newUser; 
        callback(null, newUser);
    },
    deleteUser: (call, callback) => {
        const { email } = call.request;
        const index = Users.findIndex(user => user.email === email);
        
        if (index === -1) {
            return callback({
                code: grpc.status.NOT_FOUND,
                details: "User not found"
            });
        }

        Users.splice(index, 1); 
        callback(null, {});
    }
});

server.bindAsync("0.0.0.0:30043", grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
        console.error("Error binding server:", error);
        return;
    }
    console.log(`Server running at http://0.0.0.0:${port}`);
    server.start();
});

