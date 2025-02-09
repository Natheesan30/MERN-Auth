import express from 'express'
import { connectDB } from './db/connectDB.js';
import dotenv from 'dotenv'

dotenv.config();

const app = express();

app.get("/", (req,res)=>{
    res.send('Hello World!')
})

app.listen(3000, ()=>{
    connectDB();
    console.log('Server is running on 3000');   
})

// mongodb+srv://nsaran755:rH48fzFPKPH8VZLt@cluster0.joyup.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0