// students api - username
import mongoose from 'mongoose';
import express from 'express';

const app = express();
mongoose.connect("mongodb://localhost:27017/nodejs").then(() =>{
    app.listen(8080, () => {
        console.log("Server Started");
    })
})

const userSchema = mongoose.Schema({
    username: {type:String}
})

const userModel = mongoose.model("Student",userSchema);
app.use(express.json());
app.post("/students", async (req,res) => {
    try {const {username} = req.body;
    const student = {username};
    const result = await userModel.create(student)
    res.status(201).json(result);}
    catch(err){
        res.status(400).json({message:"Something went wrong!"})
    }
})