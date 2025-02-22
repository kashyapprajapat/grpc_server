import express from "express";
import path from "path";
import client from './client.js';

const app = express()
const PORT = process.env.PORT || 7777;
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API Documentation</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #f4f4f9;
                    text-align: center;
                }
                .container {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
                    max-width: 600px;
                }
                h1 {
                    color: #333;
                }
                .api {
                    margin: 15px 0;
                    padding: 10px;
                    border-radius: 5px;
                    background: #eef;
                }
                .method {
                    font-weight: bold;
                    color: white;
                    padding: 3px 7px;
                    border-radius: 3px;
                }
                .get { background: green; }
                .post { background: blue; }
                .put { background: orange; }
                .delete { background: red; }
                code {
                    background: #ddd;
                    padding: 2px 5px;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>📌 API Documentation</h1>
                <div class="api">
                    <span class="method get">GET</span> <b>/users</b> - Get all users 🧑‍🤝‍🧑
                </div>
                <div class="api">
                    <span class="method post">POST</span> <b>/adduser</b> - Add a new user ➕
                    <br><b>Request Body:</b> <code>{ "name": "John", "email": "john@example.com", "age": 25 }</code>
                </div>
                <div class="api">
                    <span class="method put">PUT</span> <b>/updateuser</b> - Update user ✏️
                    <br><b>Request Body:</b> <code>{ "email": "john@example.com", "newUser": { "name": "Johnny", "age": 26 } }</code>
                </div>
                <div class="api">
                    <span class="method delete">DELETE</span> <b>/deleteuser</b> - Delete user ❌
                    <br><b>Request Body:</b> <code>{ "email": "john@example.com" }</code>
                </div>
            </div>
        </body>
        </html>
    `);
});


app.get("/users",(req,res)=>{
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


app.put("/updateuser", (req, res) => {
    const { email, newUser } = req.body;

    client.updateUser({ email, newUser }, (err, data) => {
        if (!err) {
            res.send(`User ${email} updated successfully.`);
        } else {
            console.error(err);
            res.status(500).send({ msg: err.details });
        }
    });
});

app.delete("/deleteuser", (req, res) => {
    const { email } = req.body;

    client.deleteUser({ email }, (err, data) => {
        if (!err) {
            res.send(`User ${email} deleted successfully.`);
        } else {
            console.error(err);
            res.status(500).send({ msg: err.details });
        }
    });
});

app.listen(PORT,()=>{
    console.log(`Server is running at the port number ${PORT}`)
})