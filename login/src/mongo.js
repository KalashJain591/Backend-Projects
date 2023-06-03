const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(()=>{
console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const loginSchema=mongoose.Schema({
 name:{
    type:String,
    required:true,
 },
 password:{
    type:String,
    required:true,
 }
});

const collection =mongoose.model("collection1",loginSchema);
module.exports=collection;