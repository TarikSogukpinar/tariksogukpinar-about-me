const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactController");


router.post("/addNewPost",contactController.addNewContact)

module.exports = router;