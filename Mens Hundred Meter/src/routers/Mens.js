const express=require("express")
const mens=new express.Router();
const MenRanking=require("../models/Mens");


mens.post("/mens",async(req,res)=>{
    try{
         const data1= new MenRanking(req.body)
         console.log(data1);
         const savedData=await data1.save();
         res.status(201).send(savedData)
    }
    catch(err){
        res.status(404).send(err);
        // console.log(err);
    }
})

mens.get("/mens",async (req,res)=>{
    try{
        const data=await MenRanking.find({}).sort({ranking:1});
        res.send(data);

    }
    catch(err){
        res.status(400).send(err);
    }
})

mens.get("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const singleData=await MenRanking.findById(_id);
        res.send(singleData);

    }
    catch(err){
        res.status(400).send(err);
    }
})

mens.patch("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const singleData=await MenRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(singleData);

    }
    catch(err){
        res.status(400).send(err);
    }
})

mens.delete("/mens/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const singleData=await MenRanking.findByIdAndDelete(id,req.body,{new:true});
        res.send(singleData);

    }
    catch(err){
        res.status(500).send(err);
    }
})

module.exports=mens;