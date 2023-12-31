const express = require("express");
const app = express();
const router=express.Router()
const mongoose = require("mongoose");
// const todb = require("./Database/connection")
// todb()
app.use(express.json());

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/movie");
}
main()
  .then(() => console.log("Connected to Data Base"))
  .catch((error) => console.log("error"));

//=========================================VALIDATION===========================================//

const personschema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter name"],
    minLength: [3, "name is not allowed"],
  },
  password: { type: String, select: false },

  role:{
    type:String ,
  enum:["ADMIN","USER"],
default:'USER'
  },
  balance:{
    default:0,
    type:Number,

  },

  city: String,
  age: { type: Number, min: [3, "early age"] }, //in array first one is critaria/condition and second one is message to print
});
const movieschema = mongoose.Schema({
  name: { type: String, required: [true, "please enter name"] },
  movielength: {
    type: Number,
    max: [180, "movie is too long"],
    min: [50, "movie is too short"],
  },
  city: String,
  category: String,
  minAge: { type: Number, min: [18, "you are too young to watch this movie"] },
  maxAge: { type: Number, max: [65, "you are too old"] },
});
const personModel = mongoose.model("person", personschema);
const movieModel = mongoose.model("movies", movieschema);

 const verifyPerson = async (req, res, next) => {
  // res.json({
  //   message: " I am first",
  // });
  // next();

  const { Id } = req.body;
  try {
    const personfound = await personModel.findById(Id);
    
    if (personfound) {
      if (personfound.role=="ADMIN") {
        req.person=personfound
        return next()

      }else{
         res.status(404).json({
          message:"invalid editor"
        })
      }

    } else {
      res.status(404).json({
        message: "Person Not Found",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Person Not Found",
    });
  }
};

// const router=require("./Router/Todo.router");

router.get("/findperson", async (req, res) => {
  const foundperson = await personModel.find();
  res.send(foundperson);
});
router.get("/findmovie", async (req, res) => {
  const foundmovie = await movieModel.find();
  res.send(foundmovie);
});

router.post("/createperson", async (req, res) => {
  //   const { name, age, city } = req.body;
  //   if (!name || !age || !city) {
  //     res.status(401).json({
  //         success:false,
  //         message:"please enter complete data"
  //     })
  //   }
  //   else{
  // const createdperson = await personModel.create({
  //     name: name,
  //     age: age,
  //     city: city,

  //   });
  const { name,role} = req.body;
  const createdperson = await personModel.create({name:name,role:role});

  res.json(createdperson);
});
router.post("/createmovie",verifyPerson, async (req, res) => {
//   //   const { name, category, minAge, maxAge } = req.body;
//   //   const createdmovie = await movieModel.create({
//   //     name: name,
//   //     category: category,
//   //     minAge: minAge,
//   //     maxAge: maxAge,
//   //   });
  try{
    const {  name, category } = req.body;
  const createdmovie = await movieModel.create({ name:name, category:category });
  res.json(createdmovie);
  } catch(err) {
    res.json({message: err.message})
  }
});

router.delete("/deleteperson", async (req, res) => {
  const {id}=req.body
  const delperson = await personModel.findByIdAndDelete({id:id});
  res.json(delperson);
});
router.delete("/deletemovie", async (req, res) => {
  const delmovie = await movieModel.deleteMany({});
  res.json(delmovie);
});

router.patch("/updateperson", async (req, res) => {
  const { name, age, city } = req.body;
  const updatedperson = await personModel.findById(id);
  if (updatedperson) {
    updatedperson.name = name;
    updatedperson.age = age;
    updatedperson.city = city;
    updatedperson.save();
    res.json(updatedperson);
  } else {
    res.send().json({
      message: "not found",
    });
  }
});
router.patch("/updatemovie", async (req, res) => {
  const { name,category,maxAge,minAge} = req.body;
  const updatedmovie = await personModel.findById(id);
  if (updatedmovie) {
    updatedmovie.name = name;
    updatedmovie.maxAge = maxAge;
    updatedmovie.minAge = minAge;
    updatedmovie.category = category;
    updatedmovie.save();
    res.json(updatedmovie);
  } else {
    res.send().json({
      message: "not found",
    });
  }
});


app.use(router);
port=3000
app.listen(port,()=>{
  console.log(`server started on ${port}`)
});

// const express = require("express");
// const app = express();
// const database=require("./Database/connection")
// const port = 3000;

// database()

// app.use(express.json());

// const router = require("./Router/Todo.router")


// const verifyPerson = async (req, res, next) => {
//   const { userId } = req.body;
//   try {
//     const personFound = await PersonModel.findById(userId);
//     if (personFound) {
//       if (personFound.role === "ADMIN") {
//         req.person = personFound;
//         return next();
//       } else {
//         res.status(401).json({
//           success: false,
//           message: "Unauthorized Access",
//         });
//       }
//     } else {
//       res.status(404).json({
//         message: "Person Not Found",
//       });
//     }
//   } catch (error) {
//     res.status(404).json({
//       message: "Person Not Found",
//     });
//   }
// };



// app.use(router);

// app.listen(port, () => {
//   console.log("Server is started");
// });
