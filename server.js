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
    addUsers: (call, callback) => {
        const user = call.request;
        Users.push(user);
        callback(null, user);
    }
});

server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure(), (error, port) => {
    if (error) {
        console.error("Error binding server:", error);
        return;
    }
    console.log(`Server running at http://127.0.0.1:${port}`);
    server.start();
});
