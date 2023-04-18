const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const port=process.env.PORT||3000;
const Register=require("./models/registration");
// const ab=require("..")
require("../src/db/connect");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const static_path=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../Templates/views");
const partials_path=path.join(__dirname,"../Templates/partials");


// console.log(path.join(__dirname,"../public"));  
// app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/register",(req,res)=>{
    res.render("register");
})

app.post("/register",async(req,res)=>{
    try{
        
        //  const data =await new Register(req.body);
        res.send(req.body)
        const p=req.body.password;
        const cp=req.body.confirmpassword;
        if(p===cp){

            const registerEmployees=new Register({
                email:req.body.email,
                phone:req.body.phone,
                firstname:req.body.firstname,
                lasttname:req.body.lastname,
                age:req.body.age,
                password:req.body.password,
                confirmpassword:req.body.confirmpassword,
                gender:req.body.gender
                
            })
   
        }

    const registered=await registerEmployees.save();
    res.status(201).render(index);
         

    }
    catch(err){
        res.status(404).send(err);
    }
})

app.listen(port,()=>{
    console.log(`Connected on port ${port}`);
})
