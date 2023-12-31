const {personModel}=require("../Models/personModel")
const {productModel}=require("../Models/productModel")



 exports.createperson=async(name,email,role)=>{
return await personModel.create({name,email,role})
}

exports.findperson=async()=>{
    return await personModel.find()
}
exports.deleteperson=async(id)=>{
    return await personModel.findOneAndDelete({id})
}
exports.updateperson=async(id)=>{
    return await personModel.findById({id})
}



//============================product=====================

exports.createproduct=async(name,id,available,price,category)=>{
    return await productModel.create({name,id,available,price,category})
    }
    
    exports.findproduct=async()=>{
        return await productModel.find()
    }
    exports.deleteproduct=async(id)=>{
        return await productModel.findByIdAndDelete({id})
    }
    exports.updateproduct=async(id)=>{
        return await productModel.findById({id})
    }
    