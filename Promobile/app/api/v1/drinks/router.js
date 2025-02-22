const express = require("express");
const {getData,getById,createData} = require("./controller.js");
// const uploadImage = require("../middleware/uploadImage.js");

const router = express.Router();

router.get("/drinks", getData);
router.get("/drinks/:id", getById);
router.post("/drinks/create",createData)

module.exports = router