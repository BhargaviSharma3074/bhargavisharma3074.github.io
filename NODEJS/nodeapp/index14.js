import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SECRET = "secret";

const app = express();
mongoose.connect("mongodb://localhost:27017/nodejs").then(() => {
    app.listen(8080, () => {
        console.log("Server Started");
    });
});


// models > userModel
const userSchema = mongoose.Schema({
    name: {type:String},
    email: {type:String, unique:true},
    password: {type:String},
    role: {type:String}
},
{ timestamps: true});

const userModel = mongoose.model("User",userSchema);

// app.get("/users", (req, res) => {
//     res.json({})
// });

app.use(express.json());
app.post("/register", async (req, res) => {
    try {const {name, email, password, role} = req.body;
    const hashedpwd = await bcrypt.hash(password,10)
    const user = {
        name, 
        email,
        password: hashedpwd,
        role,
    };
    const result = await userModel.create(user);
    res.status(201).json(result);}
    catch(err) {
        console.log(err);
        res.status(400).json({message: "Something went wrong!"});
    }
});

const authenticate = (req,res,next) => {                            
    try{
    let token = req.headers.authorization.split(' ')[1];
    const user = jwt.verify(token, SECRET);
    req.role = user.role;
    next();
    
}
    catch (err){
        return res.status(400).json({message: "Invalid Token"});
    }
    return res.json(token);
}

const authorize = (role) => {
    return (req, res, next) => {
        if(req.role === "admin")
        {
            next();
        }
        else
        {
            res.status(403).json({message: "Unauthorized Access!"})
        }
    }
}

app.get("/users", authenticate, authorize("admin"),async (req, res) => {
    try {const result = await userModel.find();
    res.status(200).json(result);}
    catch(err) {
        console.log(err);
        res.status(400).json({message: "Soemthing went wrong!"});
    }
});

// ===========================================================================================================================================
// const SECRET = "secret";
// app.post("/login", async (req,res) => {
//     try 
//     {
//         const {email, password} = req.body;
//         const user = await userModel.findOne({email,password});
//         // const token = req.headers.authorization.split(' ')[1];
//         // const user = jwt.verify(token, SECRET);

//         if(user || check)
//         {
//             const token = jwt.sign({id: user._id, name:user.name, role:user.role}, SECRET, {expiresIn:"1h"});
//             res.status(200).json({user:user, token});
//         }
//         else
//         {
//             res.status(403).json({message: "Access Denied!"});
//         }
//     }
//     catch(err) 
//     {
//         console.log(err);
//         res.status(400).json({message: "Something went wrong!"})
//     }
// });
// ===========================================================================================================================================


app.post("/login", async (req,res) => {
    try 
    {
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
       

        if(user)
        {
            const check = await bcrypt.compare(password, user.password);
            if(check)
            {
                const userObj = {
                    name:user.name, 
                    email: user.email, 
                    role:user.role
                }
                const token = jwt.sign(userObj, SECRET, {expiresIn:"1h"});
                res.status(200).json({userObj, token});
            }
            else
            {
                res.status(400).json({message:"Invalid Password"})
            } 
        }
        else
        {
            res.status(400).json({message: "User not found"})
        }
    }
    catch(err) 
    {
        console.log(err);
        res.status(400).json({message: "Something went wrong!"})
    }
});




const userRouter = express.Router();
app.use("/api", userRouter);