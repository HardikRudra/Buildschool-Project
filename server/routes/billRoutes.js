const { updateStatus } = require("../controllers/billsController");
const { addbill } = require("../controllers/billsController");
const router = require("express").Router();




const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dtpp08tmi",
    api_key: "567293825275939",
    api_secret: "DGA2IC7KHBcXN4QTRXrIivE-Irk"
  });




router.post("/addbill",addbill);
router.put("/manager/approvebills/:id", updateStatus);


module.exports = router;
