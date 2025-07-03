import express from 'express';

const app = express();
app.listen(8080, () => {
    console.log("Server Started");
});

// app.get("/", (req,res) => {
//     res.send("Hello World");
// });

// app.get("/products",(req,res) => {
//     // res.send("Product List");
//     res.status(201).json(
//         {id:1, name:"Product 1", price: 25});
// });

// app.get("/ab*cd", (req,res) => { //enter anything between ab and cd, and it will work, abcd, abjfbhbcd, etc.
//     res.send("Hello");
// });


// app.get("/name", (req,res) => {          // fixed endpoint
//     res.send("Good Morning");
// });


// app.get("/:name", (req,res) => {            // anything after /: works and results in the same endpoint
//     res.send(req.params.name);
// });

// app.get("/name/:name", (req,res) => {
//     res.send(req.params.name);
// });

// app.get("/:name/:age", (req,res) => {
//     res.send(req.params.name+req.params.age);
// });

// app.get("/name/:name/age/:age", (req,res) => {
//     res.send(req.params.name+req.params.age);
// });

// app.get("/", (req,res) => {
//     res.send(req.headers.authorization);
// });

//localhost:8080/?name=john&age=21
// app.get("/", (req,res) => {
//     res.send(req.query.name+req.query.age);
// });

app.get("/", (req,res) => {
    res.send("Get Request");
});

app.post("/", (req,res) => {
    res.send("Post Request");
});

app.delete("/", (req,res) => {
    res.send("Delete Request");
});

app.patch("/", (req,res) => {
    res.send("Patch Request");
});