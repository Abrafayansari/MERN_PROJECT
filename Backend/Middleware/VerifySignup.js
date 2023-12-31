const  loginModel = require("../Models/projectModel")

// exports.VerifySignup=(req,res,next)=>{
//     const {Email}=req.body
//     const found =loginModel.find({Email:Email})
//     if (!found) {
//         return next()
//     }else{
//         res.status(404).json({
//             message:"Email already exist"
//           })
//         }
//     }
exports.Verify = async (req, res,next) => {
    const { Email } = req.body;
  
    try {
      const existingUser = await loginModel.findOne({ Email:Email });
      if (existingUser) {
        return res.status(409).json({ message: 'Email already exists' });
      }
  
      // Create and save new user if email is unique
      // ...
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' }); 
      next()
    }
  };
  
