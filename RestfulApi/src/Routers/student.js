const express=require("express");
const router=new express.Router();
const Student = require("../../model/student")
router.get("/kalash",(req,res)=>{
    res.send("Hello kalash from this side");
    
})

// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
    
//     user.save().then(() => {res.status(201).send(user);})
//     .catch((err) => {res.status(400).send(err);});
//     res.send("Hello from the other side");
// })

// to post or insert the data
router.post("/students",async(req,res)=>{
    try{
        console.log(req.body);
        const user = new Student(req.body);
        const createUser=await user.save();
        res.status(400).send(createUser); 
    }
    catch(err){
        res.status(201).send(err);
    }
        
    })
    
    // to get the data about the stutdens
    
    router.get("/students",async(req,res)=>{
     try{
        const studentData=await Student.find();
        res.send(studentData);
         
     }
     catch(err){
        res.send(err);
    
        // console.log(err);
     }
    })
    
    // to get info about a particular student
    router.get("/students/:id",async(req,res)=>{
        try{
        const id=req.params.id;
        const singleData=await Student.find({_id:id});
        res.send(singleData);}
        catch(err){
            res.status(404).send(err);
        }
    })
    
    // to update the data of the students
    router.patch("/students/:id",async (req,res)=>{
        try{
            const _id=req.params.id;
            const updatedData=await Student.findByIdAndUpdate(_id,req.body,{
                new:true
            })
            res.send(updatedData);
    
    
        }
        catch(err){
            res.status(404).send(err);
        }
    })




module.exports=router;