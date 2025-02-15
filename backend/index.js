import express from 'express'
import { connectDB } from './db/connectDB.js';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({origin: "http://localhost:5173", credentials: true}));

app.use(express.json());// allow us to parse incoming requests:req.body
app.use(cookieParser());// allow us to parse incoming cookies

app.use('/api/auth', authRoutes);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server is running on ${PORT}`);   
})
