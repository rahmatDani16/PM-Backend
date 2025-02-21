const express = require("express");
const { getData, createData, validasi, updateData, findData, deleteData } = require("./controller.js");
const uploadImage = require("../middleware/uploadImage.js");

const router = express.Router();

router.get("/buku", getData);
router.post("/buku/create", validasi, uploadImage.single("sampul"), createData);
router.put("/buku/update/:id", validasi, uploadImage.single("sampul"), updateData);
router.get("/buku/:id", findData);
router.delete("/buku/:id", deleteData);

module.exports = router;
