import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();
app.listen(8080, () =>{
    console.log("Server Started");
});

// const users = [{
//     email: "john@gmail.com",
//     pass: "1234",
//     role: "user",
// },
// {
//     email: "admin@gmail.com",
//     pass: "1234",
//     role: "admin",
// }];
const users = [];

const SECRET = "abcd";

app.use(express.json());
const authenticate = (req,res,next) => {                            // trying on my own
    try{
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
    
}
    catch (err){
        return res.status(400).json({message: "Invalid Token"});
    }
    return res.json(token);
}

// const authenticate = (req,res,next) => {
//     const token = req.headers.authorization.split(' ')[1];
//     return res.json(token);
// }

const authorize = (role) => {
    return (req, res, next) => {
        if(req.role==="admin")
        {
            next();
        }
        else
        {
            return res.status(403).json({message: "Unauthorized Access!"});
        }
    };
  };

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

app.post("/register", (req,res) => {
    const {name, email, pass, role} = req.body;
    const hashedpsw = bcrypt.hash(pass, SECRET);
    const user = {
        name, 
        email, 
        pass: hashedpsw, 
        role,
    };
    users.push(user);
    
});

app.get("/users", authenticate, authorize("admin"), (req,res) =>{
    res.json(users);
})