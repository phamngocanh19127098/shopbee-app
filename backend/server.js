import express from "express";
import data from "./data.js";
const app = express();

app.get('/',(req,res)=>{
    res.send('Server is ready')
})

app.get('/api/product',(req,res)=>{
    res.send(data)
})

app.listen(5000,()=>{
    console.log('Sever is running at port 5000 ');
})

