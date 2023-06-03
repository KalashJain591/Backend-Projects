
const express =require ("express");
const app = express();
const path =require("path");
const PORT=3000;
const hbs =require("hbs");
const collection=require("./mongo")
const templatePath=path.join(__dirname,'../Templates');
app.use(express.json());
app.set("view engine","hbs");
app.set("views",templatePath) ;
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    // res.send("hello")
    res.render("login");
    // res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>')

})
app.get("/signup",(req,res)=>{
    res.render("signup");
})


app.post("/signup",async (req,res)=>{
  const data={
    name:req.body.name,
    password:req.body.password,
    password2:req.body.password2
  }
  if(data.password!=data.password2)
  res.status(400).send("Passwords are not matching");
  const t=await collection.findOne({name:data.name});
  if(t)
  res.status(400).send("A User already exits with this name ");


  await collection.insertMany([data]);
  res.render("home");

})

app.post("/login",async(req,res)=>{
  try{
    let nam=req.body.name;
    let pass=req.body.password;
  const t=await collection.findOne({name:nam})
  if(t.password==pass){
    res.render("home");
  }
  else{
    res.send("wrong password");
  }
  
  }
  catch{
 res.send("invalid details ");
  }
  
})



app.listen(PORT,()=>{
    console.log(`Connected to port : ${PORT}`);
    
})
