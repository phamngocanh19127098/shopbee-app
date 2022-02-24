import express from "express";

import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/producRouter.js";
import dotenv from 'dotenv'
import orderRouter from "./routers/orderRouter.js";
dotenv.config();
const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost/amazona',{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  
})


app.get('/',(req,res)=>{
    res.send('Server is ready')
})


app.use('/api/users',userRouter)
app.use('/api/products',productRouter);
app.use('/api/orders',orderRouter);
app.use((error,req,res,next)=>{
    res.status(500).send({message: error.message});
    next();
})
app.listen(5000,()=>{
    console.log('Sever is running at port 5000 ');
})

