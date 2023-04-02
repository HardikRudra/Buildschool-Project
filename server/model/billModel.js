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
    type: String, default: "queued",
  }
  },
);


module.exports = mongoose.model("Bills", billSchema);
