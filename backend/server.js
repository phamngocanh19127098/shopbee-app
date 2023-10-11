import express from "express";

import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/producRouter.js";
import dotenv from 'dotenv'
import orderRouter from "./routers/orderRouter.js";
dotenv.config();
const app = express();
app.use(express.json());

const URL = `mongodb://mongodb_service:27017?retryWrites=false`

const connectionOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
}
connectionOption['auth'] = {
    authSource: 'admin'
}
connectionOption['user'] = 'root'
    connectionOption['pass'] = 'example'
mongoose.connect(URL, connectionOption)
    .then((result) => console.log("Connected to mongodb at: " + URL))
    .catch(
        (err) => {
            console.log(err);
            console.error("Cannot connect to db");
        });


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
const PORT = process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log('Sever is running at port 5000 ');
})

