const express = require("express");
const { getData, createData } = require("./controller.js");
const uploadImage = require("../middleware/uploadImage.js");

const router = express.Router();

router.get("/user", getData);
router.post("/user", uploadImage.single("profil"), createData);

module.exports = router;
