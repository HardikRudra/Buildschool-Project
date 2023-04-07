const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  billname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    // unique: true,
  },
  itemname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    // unique: true,
  },
  amount: {
    type:Number,
    required: true,
    unique: false,
  },
  proof: {
    type:Buffer,
    required: false,
    // unique: true,
  },
  status: {
    type: String,
    default:'queued',
  },
  teamname: {
    type:String,
    //default:"Saarang",
  },
  
  date: {
    type:Date,
    default:"02-01-2023",
  }



  },
);





module.exports = mongoose.model("Bills", billSchema);
