const mongoose=require("mongoose")
// const bcrypt =require("bcrypt")
// const salt=2
const loginSchema=new mongoose.Schema({
    Username:String,
    Email: String, 

    Password:String,
    

})

// loginSchema.pre("save",async function(next){
//     this.password=await bcrypt.hash(this.password,salt)
//     next()
// })
const loginModel=mongoose.model("login",loginSchema)
module.exports=loginModel
//====================================image model=========================//




// const imgSchema = new mongoose.Schema({
//     User:{type: mongoose.Schema.Types.ObjectId,
//       ref: 'login'

//     },
//     url:String
// })

// // loginSchema.pre("save",async function(next){
// //     this.password=await bcrypt.hash(this.password,salt)
// //     next()
// // })
// const imgModel=mongoose.model("image",imgSchema)
// module.exports={imgModel}



//===========================================places Model=========================================//









