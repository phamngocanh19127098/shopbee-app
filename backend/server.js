import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
const app = express();
mongoose.connect('mongodb://localhost/amazona',{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
app.get('/api/products/:id',(req,res)=>{
    const product = data.products.find(x=>x._id ===req.params.id);
    
    if(product){
        res.send(product);
    }
    else{
        res.status(404).send({message : 'Product not found'});
    }
})

app.get('/',(req,res)=>{
    res.send('Server is ready')
})

app.get('/api/products',(req,res)=>{
    res.send(data)
})
app.use('/api/users',userRouter)
app.use((error,req,res,next)=>{
    res.status(500).send({message: error.message});
    next();
})
app.listen(5000,()=>{
    console.log('Sever is running at port 5000 ');
})

