const mongoose=require("mongoose")
const ProductSchema=new mongoose.Schema({
    id:String,
    name:String,
    available:Number,
    category:{
        enum:["FOOD","PC","CLOTHES"]
    },
    price:Number
})
exports.productModel=mongoose.model("product",ProductSchema)