const router = require("express").Router();
const { register } = require("../controllers/usersController");
const { login }  = require("../controllers/usersController");


router.post("/register",register);
router.post("/login",login);



module.exports = router;

