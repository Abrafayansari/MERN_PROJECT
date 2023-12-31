const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");



const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    minLength: [3, "Name is not allowed"],
    maxLength: [20, "Name is tooooooooo lengthy"],
  },
  password: {
    type: String,
    select: false,
    minLength: [5, "Password can not be less than 5"],
  }, // password won't be fetched
  age: {
    type: Number,
    min: [3, "Person is not allowed under the age of three"],
  },
  city: String,
  balance: {
    type: Number,
    default: 0,
  },
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
});
// PersonSchema.pre("save", async() => {
//   let passwordEncreption = await bcrypt.hash(this.password, 2)
//   this.password = passwordEncreption
//   console.log(passwordEncreption)
// });
// PersonSchema.post("save", () => {
//   console.log(this);
//   console.log("after::: do some operations");
// });

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: [true, "please enter movie name"] },
  movieLength: {
    type: Number,
    min: [20, "movie under 20 min not allowed"],
    max: [180, "movie can't be greater than 180 mins"],
  },
  minAge: {
    type: Number,
    min: [3, "Movie not allowed because the minimum age is 3  "],
  },
  maxAge: {
    type: Number,
    max: [90, "Movie not allowed because the max age is 90"],
  },
  category: String,
});

const PersonModel = mongoose.model("Person", PersonSchema);
const MovieModel = mongoose.model("Movie", MovieSchema);
  
module.exports=PersonModel;
module.exports=MovieModel
