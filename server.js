const PROTO_PATH = "./proto/user.proto";

import grpc from "@grpc/grpc-js";
import protoloader from "@grpc/proto-loader";
import {v4 as uuid } from "uuid4";


const packageDefinition = protoloader.loadSync(PROTO_PATH,{
    keepCase:true,
    longs:String,
    enums:String,
    arrays:true
})

const userProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server()

let Users = [
    {
        name:"Kashyap",
        email:"prajaptaikashyap14@gmail.com",
        age:27
    },
    {
        name:"Parth",
        email:"prajaptaiparth009@gmail.com",
        age:18
    },
]

server.addService(userProto.Userservice.service,{
    getUsers : (_,callback)=>{
        callback(null,Users);
    },
    addUsers : (call,callback)=>{
        const user = call.request;
        Users.push(user);
        callback(null,user);
    }
})

server.bind("127.0.0.1:30043", grpc.ServerCredentials.createInsecure());
server.start();
console.log("Server running at http://127.0.0.1:30043");