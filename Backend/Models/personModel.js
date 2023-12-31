const mongoose=require("mongoose")
const personSchema=new mongoose.Schema({

    name:String,
    email:String,
    role:{
        type:String ,
      enum:["ADMIN","USER"],
    default:'USER'
      },
})
exports.personModel=mongoose.model("person",personSchema)