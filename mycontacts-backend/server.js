const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = 5000;

app.get("/", (req,res)=>{
    res.send(`port running on ${port}`);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});