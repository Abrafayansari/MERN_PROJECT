
const mongoose = require("mongoose");


database=async  ()=>{
  mongoose
  .connect("mongodb://127.0.0.1:27017/MERN")
  .then(console.log("Database is connected"))
  .catch((err) => {
    console.log(err);
  })}
   module.exports={database}