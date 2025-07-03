import express from 'express';

const app = express();
app.listen(8080, (req,res) => {
    console.log("Server Started");
});
app.use(express.json());

let products = [];
app.post("/", (req,res) => {
    try
    {
        const { id, name, price } = req.body;
        // res.send(name);
        const found = products.find((product)=>product.id===id);
        if(found) {
            res.send("Product already exists!");
        }
        else {
            products.push({id,name,price});
        }
        res.status(201).json({message:"Product Created"});
    }
    catch (err) {
        res.status(400).json({message:"Something went wrong!"});
    }
});

app.get("/", (req,res) => {
    res.json(products)
});

app.delete("/:id", (req, res) => {
    try{ 
        const id = Number(req.params.id);
        products = products.filter((value) => value.id !== id);
        res.json({message:"Product Deleted"});
    }
    catch(err){
        res.json({message:"Something went wrong"});
    }
});

app.patch("/", (req,res) => {
    res.send(req.body);
});