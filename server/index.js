import  express, { urlencoded }  from "express";
import cors from"cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json({limit:"30mb",extendedL:true}));
app.use(cors());
app.use(urlencoded({limit:'30mb',extended:true}));

