const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
   email:{
    type:String,
    required:true,
    unique:true,
    validate(val){
        if(!validator.isEmail(val))
        throw new Error ("email is invalid");

    }

   },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
   

})

// We wil create a new collection
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;
