
const PersonModel=require("../Models/Todo-models")
const MovieModel=require("../Models/Todo-models")
createperson=async(req,res,next)=>{
    const {name,age,role}=req.body
    const created=await PersonModel.create({name:name,age:age,role:role})
    res.json(created)
}
findperson=async(req,res,next)=>{
    const found=await PersonModel.find()
    res.json(found)
}
createmovie=async(req,res)=>{
    const {name,city,category}=req.body
    const moviecreated=await MovieModel.create({name:name,city:city,category:category})
    res.json(moviecreated)
}
module.exports=createperson
module.exports=createmovie
module.exports=findperson