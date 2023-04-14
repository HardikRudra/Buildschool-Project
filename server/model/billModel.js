const express = require('express');
const mongoose = require('mongoose');

const app = express();

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
    type:String,
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

// export const MyModel = mongoose.model('MyModel', billSchema);






module.exports = mongoose.model("Bills", billSchema);


// im.png 
// public/asset/