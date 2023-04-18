const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/registrationData",{
    // useUnifiedTopology:true,
    // useCreateIndex:true,
    
}).then(()=>{console.log("connected to the Database");})
.catch((err)=>{console.log("not connected to the database");})



