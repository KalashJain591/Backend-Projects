// import React from 'react'
import mongoose from 'mongoose'
const Connection =async(username, pass)=> {
  const URL=`mongodb://${username}:${pass}@ac-lkym2dr-shard-00-00.f2pgynb.mongodb.net:27017,ac-lkym2dr-shard-00-01.f2pgynb.mongodb.net:27017,ac-lkym2dr-shard-00-02.f2pgynb.mongodb.net:27017/?ssl=true&replicaSet=atlas-13e5gu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
    await mongoose.connect(URL,{ useNewUrlParser:true});
    console.log("succesfully connected to database ");
  }
  catch(err){
    console.log("Error while connecting to database :",err);

  }
}

export  default Connection;
