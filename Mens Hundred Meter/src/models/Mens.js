const express = require("express");
const mongoose = require("mongoose");

const mensSchema = new mongoose.Schema({
    event: {
        type: String,
        required: true,
        unique: true,
    },
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    dob: {
        type:Date,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
    },
  
});

const MenRanking = new mongoose.model("MenRanking", mensSchema);
module.exports=MenRanking;