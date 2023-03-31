
const { addbill } = require("../controllers/billsController");
const router = require("express").Router();
router.post("/addbill",addbill);


module.exports = router;
