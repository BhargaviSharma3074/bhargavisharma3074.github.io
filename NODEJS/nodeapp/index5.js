import express from 'express';

const app = express();

const logger = (req,res,next) =>{
    req.message = "Logger";
    next();
}

// app.use(logger);
app.get("/", (req,res) => {
    res.send(req.message)
})

app.get("/products", logger, (req,res) => {
    res.send(req.message)
})
app.listen(8080, () =>{
    console.log("Server Started");
})

