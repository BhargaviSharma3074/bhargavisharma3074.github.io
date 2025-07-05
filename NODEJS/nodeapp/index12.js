import express from 'express';
let port = process.argv[2] || "8080";
const app = express();
app.listen(port, () =>{
    console.log("Server Started");
});

let name = process.argv[3] || "John"; // command line argument
// console.log(`Hello ${name}!`);

app.get("/", (req,res) => {
    res.send(`Hello ${name}! From port - ${port}`);
})