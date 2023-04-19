const { updateStatus,updateDate, updateBillDate} = require("../controllers/billsController");
const { addbill } = require("../controllers/billsController");
const {updateBill} = require("../controllers/billsController")
const router = require("express").Router();




const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: "dtpp08tmi",
    api_key: "567293825275939",
    api_secret: "DGA2IC7KHBcXN4QTRXrIivE-Irk"
  });




router.post("/addbill",addbill);
router.patch("/updatebill", updateBill)
router.put("/manager/approvebills/:id", updateStatus);
router.patch("/manager/approvebills/:id", updateDate);
router.put("/manager/paybills/:id", updateStatus);
module.exports = router;