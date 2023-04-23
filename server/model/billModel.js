const express = require('express');
const mongoose = require('mongoose');

const app = express();

const billSchema = new mongoose.Schema({
  billname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique:false,
  },
  itemname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique:false,
  },
  amount: {
    type:Number,
    required: true,
    unique: false,
  },
  proof: {
    type:String,
    required: false,
    unique:false,
  },
  status: {
    type: String,
    default:'Queued',
  },
  teamname: {
    type:String,
    //default:"Saarang",
  },
  
  date: {
    type:String,
    default:"",
  }



  },
);

// export const MyModel = mongoose.model('MyModel', billSchema);






module.exports = mongoose.model("Bills", billSchema);


// im.png 
// public/asset/