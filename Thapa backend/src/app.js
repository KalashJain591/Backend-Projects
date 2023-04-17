const mongoose = require("mongoose");
const validator=require("validator")

mongoose.connect("mongodb://localhost:27017/kjchannel", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("connection established"))
    .catch(() => console.log("some error"));

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,
        uppercase:true,

    },
    ctype: String,
    videos:{
        type: Number,

         validate(val){
            if(val<0)
            throw new Error ("Videos count cannot be negative");
         }
    },
    author: String,
    type: Boolean,
    email:{
        required:true,
        type:String,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ("Email is invalid");
            }
        }

    },
    date: {
        type: Date,
        default: Date.now
    }
})

// model 
const Playlist = new mongoose.model("Playlist", playlistSchema)


// const update={$set:{name:"Vanila Javascript"}}
// const option={new:true}

// const updateDocument=async(_id)=>{
//     try{
//           const result=await Playlist.findByIdAndUpdate({_id},update,option);

//     }
//     catch(err){
//         console.log(err);
//     }
// }

const createdb = async () => {
    try {

        // const result=await Playlist.find({$and:[{author:"kalash"},{ctype:"frontend"}]})
        // // .select({videos:1,_id:0});
        // .sort({name:-1});
        // console.log(result);
        const mongoosePlaylist=new Playlist({
            name:"Jquery",
            ctype:"frontend",
            videos:19,
            author:"kalash",
            email:"kalashj93@gmail.in",
            active:true
        })

        const result=await Playlist.insertMany([mongoosePlaylist]);
        console.log(result);

    }
    catch(err) {
        console.log(err);
    }
}
createdb();
// updateDocument("64399efd8b397b53d2ef65d6") ;