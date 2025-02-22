import express from "express";
import path from "path";
import client from './client.js';

const app = express()
const PORT = process.env.PORT || 7777;
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get("/",(req,res)=>{
    client.getUsers(null, (err,data)=>{
        if(!err){
            res.send(data);
        }else{
            console.error(err);
            res.status(500).send({
                msg:"Error at server side"
            })
        }
    })
});


app.post("/adduser",(req,res)=>{
    const newUser = req.body;
    client.addUser(newUser, (err,data)=>{
        if(!err){
            res.send(`${newUser} Added Sucessfully..`);
        }else{
            console.error(err);
            res.status(500).send({
                msg:"Error at server side"
            })
        }
    })
});


app.listen(PORT,()=>{
    console.log(`Server is running at the port number ${PORT}`)
})