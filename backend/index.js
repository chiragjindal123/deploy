import express from "express";

const app = new express();

app.get("/", (req,res) =>{
    res.send("Hello World");
});

// get a list of 5 jokes

app.get("/api/jokes", (req,res) =>{
    const jokes = [
        {
            id: 1,
            title: "Why did the scarecrow win an award? Because he was outstanding in his field!"
        },
        {
            id: 2,
            title: "What do you call a belt made out of watches? A waist of time!"
        },
        {
            id: 3,
            title: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            id: 4,
            title: "What do you get when you cross a snowman and a vampire? Frostbite!"
        },
        {
            id: 5,
            title: "Why did the math book look sad? Because it had too many problems!"
        }
    ];
    res.json(jokes);
});

const port =  process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
});