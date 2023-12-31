const express=require("express")
const router=express.Router()

const {
    createperson,
    deleteperson,
    findperson,
    updateperson,createproduct,deleteproduct,findproduct,updateproduct
  } = require("../controllers/per&procontroller");


  router.post("/createperson",createperson)
  router.delete("/deleteperson",deleteperson)
  router.get("/findperson",findperson)
  router.patch("/updateperson",updateperson)



  router.post("/createproduct",createproduct)
  router.delete("/deleteproduct",deleteproduct)
  router.get("/findproduct",findproduct)
  router.patch("/updateproduct",updateproduct)

  // module.exports={router}