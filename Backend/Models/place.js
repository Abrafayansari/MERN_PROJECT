const mongoose= require("mongoose")
const placeSchema = new mongoose.Schema({
    id:Number,
    name:String,
   place: String,
    description:String,
    photo: String,
    photoone:String,
    price: Number,
  });
  
  const placeModel = mongoose.model('Place', placeSchema);
  
  module.exports = placeModel;