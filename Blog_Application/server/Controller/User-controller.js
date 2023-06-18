import express from 'express'
import User from '../model/user.js'
export const SignUpUser=async (req,res)=>{
    try{
        const user=req.body;
        // To validate the content coming from the front-end
        const newUser=new User(user)
        await newUser.save();
        return res.status(200).json({msg:"Signup Sucessful"});

    }
    catch(err){
        return res.status(500).json( {msg:"Signup error "});

    }
 
}