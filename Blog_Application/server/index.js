import express from "express"
import Connection from './Database/db.js'
import dotenv from "dotenv";
import router from "./Route/route.js";

const app=express();

app.use('/',router);

const PORT=8000;
dotenv.config();



const username=process.env.DB_USERNAME
const pass=process.env.DB_PASSWORD
app.listen(PORT,(req,res)=>{
 console.log(`listening on the PORT :${PORT}`);
});
Connection(username,pass);