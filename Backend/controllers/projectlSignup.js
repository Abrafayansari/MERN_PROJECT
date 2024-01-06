const loginModel = require("../Models/projectModel")
const {  del } = require("../services/pojectservice")
const CatchAsyncError = require("../Middleware/CatchAsyncError")
const customError = require("../Middleware/customError")
const mongoose=require("mongoose")
const cloudinary=require("../Middleware/ImgUpload")
const placeModel = require("../Models/place")
const BookingModel = require("../Models/Booking")
const stripe=require("stripe")
exports.createuser = CatchAsyncError(async (req, res, next) => {
    const { Username, Email, Password } = req.body
    //  throw new customError("not found",404)
    const exist = await loginModel.findOne({Email:Email})
    if (exist) {
        res.status(404).json({
            message:"User already exist with this email"
        })
    }else{
        const createduser = await loginModel.create({Username:Username, Email:Email, Password:Password})
res.status(200).json(createduser)
    }
    
       

})
exports.deleteuser = CatchAsyncError(async (req, res) => {

    const deleteduser = await del(id)
    res.json(deleteduser)
})
exports.findperson = CatchAsyncError(async (req, res, next) => {
    const found = await loginModel.find()
    res.json(found)
})


exports.finduser = CatchAsyncError(async (req, res) => {
    const { Email, Password } = req.body
    const founduser = await loginModel.find({ Email: Email, Password: Password })
    if (founduser.length >= 1) {
        // User not found
        return res.status(200).json(founduser);
        //   }if (foundUser.length > 1) {
        //     // Multiple users found (potential error)
        //     return res.status(500).json({ message: "Internal server error" });
        //   }
    } else {
        res.status(404).json({
            message: "not found"
        })
    }

})


exports.findsignup = CatchAsyncError(async (req, res) => {
    const { Email } = req.body
    const founduser = await loginModel.find({ Email: Email })
    if (founduser.length >= 1) {
        // User not found
        return res.status(200).json(founduser);
        //   }if (foundUser.length > 1) {
        //     // Multiple users found (potential error)
        //     return res.status(500).json({ message: "Internal server error" });
        //   }
    } else {
        res.status(404).json({
            message: "not found"
        })
    }

})

exports.Uploadplaces= async (req,res,next)=>{
    const {places}=req.body
    const created=  await placeModel.insertMany(places)
    res.json(created)
}
exports.finduploads=async(req,res)=>{
    const found=await placeModel.find({})
    res.json(found)
}
exports.bookplace=async(req,res)=>{
    const {user,place,name,phone,checkIn,checkOut,email,price}=req.body
    const created=await BookingModel.create({
       user:user, place:place,name:name,phone:phone,checkIn:checkIn,checkOut:checkOut,email:email,price:price 
    })
    res.json(created)
}
exports.findbookedplace=async(req,res)=>{
    const found=await BookingModel.find().populate("user").populate("place")
    res.json(found)
}
exports.findbookplaceofuser=CatchAsyncError(async(req,res)=>{
    const {user}=req.body
    const found= await BookingModel.find({user:user}).populate("user").populate("place")
    if (found.length>=1) {
        res.json(found).status(200)
    }else{
        res.json({
            message:"not any Bookings Found"
        }).status(404)
    }
     
})






//===============================Stripe payment ================================//







