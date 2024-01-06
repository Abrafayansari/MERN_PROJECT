const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {type:mongoose.Schema.Types.ObjectId,ref:"login"},
  place: {type:mongoose.Schema.Types.ObjectId, required:true, ref:'Place'},
  name: {type:String, required:true},
  phone: {type:String, required:true},
  checkIn: {type:Date},
  checkOut: {type:Date},
  email:String,
  price: Number
});

const BookingModel = mongoose.model('Booking', bookingSchema);

module.exports = BookingModel;