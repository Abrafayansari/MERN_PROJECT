const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const fs = require("fs");


const  {Verify}=require("../Middleware/VerifySignup")
const {createuser, findperson, Uploadplaces, finduploads, bookplace, findbookedplace} = require("../controllers/projectlSignup")
const {deleteuser}=require("../controllers/projectlSignup")
const {finduser,findsignup}=require("../controllers/projectlSignup");

router.post("/create",createuser)
router.delete("/deleteallusers",deleteuser)
router.post("/find",finduser)
router.get("/findall",findperson)
router.post("/findsign",Verify, findsignup)
router.post("/uploadplace",Uploadplaces)
router.get("/findupload",finduploads)
router.post("/bookplace",bookplace)
router.get("/findbookedplace",findbookedplace)
//========================file upload=========================//


cloudinary.config({
    cloud_name: "dd3ujnv1p",
    api_key: "539384279699944",
    api_secret: "fr9wBEwuOVxB5TA7nlhEL2hnjn8",
    secure: true,
  });
var storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    }
});
const upload = multer({ storage: storage });
router.post("/file", upload.single("avatar"), async (req, res) => {
    cloudinary.uploader.upload(req.file.path).then((result) => {
        const { url } = result
const imgcreated= imgModel.create({
    url:url
})
res.json(imgcreated)
fs.unlink(`${req.file.path}`, (err) => {
    console.log(err);
})
       
    })

    res.json({
        message: "file uploaded",
    })
})
router.get("/getimages",async (req,res)=>{
// const {id} = req.body
const found=await imgModel.find().populate()
res.json(found)
})



    


module.exports={router}