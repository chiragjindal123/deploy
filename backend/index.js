import express from "express";

const app = new express();

app.get("/", (req,res) =>{
    res.send("Hello World");
});

const port =  process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
});