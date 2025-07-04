import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.listen(8080, () =>{
    console.log("Server Started");
});

const users = [{
    email: "john@gmail.com",
    pass: "1234",
    role: "user",
},
{
    email: "admin@gmail.com",
    pass: "1234",
    role: "admin",
}];

const SECRET = "abcd";
app.use(express.json());
app.post("/login", (req,res) => {
    const {email, pass} = req.body;
    const found = users.find((user) => user.email===email && user.pass===pass);
    if(found)
    {
        const token = jwt.sign(found, SECRET, {expiresIn: "1h"});
        res.status(200).json({user:found,token});
    }
    else
    {
        res.status(403).json({message: "Access Denied!"});
    }
});