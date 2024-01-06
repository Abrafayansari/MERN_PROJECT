const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const fs = require("fs");
const stripe=require("stripe")("sk_test_51OKLBeSIsiY4AVCkNMTathVDNyQd7aBMAfaBMKrCBG3MVOQJYj2RNRWgUF7TZvqoohMzKOV3wgQQPVxewt33q6l900too4GpUY")  

const  {Verify}=require("../Middleware/VerifySignup")
const {createuser, findperson, Uploadplaces, finduploads, bookplace, findbookedplace, findbookplaceofuser, Stripe} = require("../controllers/projectlSignup")
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
router.post("/finduserplace",findbookplaceofuser)
//=====================Stripe=====================//
router.get("/publishable-key", (req,res) => {
    res.json({ publishable_key: "pk_test_51OKLBeSIsiY4AVCk6uYykDnlwr2Bj0YCdLZGztqmOSswcrMk9yWybT0naM4gJNhllbHmPD3ZvQF960eM9LXqZTLI00EW8rLwTi" }) ;
  });
//   router.post("/create-payment-intent", async (req,res) => {
//     try {
//         const customer = await stripe.customers.create({
//             name: 'Amir',
//             email: 'amir@example.com', // Provide the customer's email
//             address: {
//               line1: '123 Main St',
//               line2:"sujjjksj", 
//               city: 'Cityville',
//               state: 'CA',
//               postal_code: '12345',
//               country: 'US',
//             },
//           });
          
             
//             const paymentIntent = await stripe.paymentIntents.create({
//                 amount: 1099,
//                 currency: "usd",
//                 payment_method_types: ["card"],
//                 description: "Tour Booking - City Explorer Package",
//                 customer: "Amir", // Replace with the actual customer name
//                 shipping: {
//                   name: "Amir",
//                   address: {
//                     line1: "123 Main St",
//                     city: "Cityville",
//                     state: "CA",
//                     postal_code: "12345",
//                     country: "US",
//                   },
//                 },
//               })
//               res.json({ client_secret: paymentIntent.client_secret})
          
           
          
//     } catch (error) {
//         console.log(error)
//     }
//   });
router.post("/create-payment-intent", async (req, res) => {
    try {
    const {price}=req.body
      let customer = await stripe.customers.list({ email: 'Rafay@example.com', limit: 1 });
  
      if (customer.data.length === 0) {
       
        customer = await stripe.customers.create({
          name: 'Rafay',
          email: 'Rafay@example.com',
          address: {
            country: 'US',
          },
        });
      } else {
        
        customer = customer.data[0];
      }
  
     
      const paymentIntent = await stripe.paymentIntents.create({
        amount: price,
        currency: 'usd',
        payment_method_types: ['card'],
        description: 'Tour Booking - City Explorer Package',
        customer: customer.id, // Use the customer ID, not the name
        shipping: {
          name: 'Rafay',
          address: {
            country: 'US',
          },
        },
      }); 
  
  
      res.json({ client_secret: paymentIntent.client_secret });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
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