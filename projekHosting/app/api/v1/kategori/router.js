const express = require("express");
const { getData, getById, createData, updateCategory, deleteCategory } = require("./controller.js");

const router = express.Router();

router.get("/kategori", getData);
router.get("/kategori/:id", getById);
router.post("/kategori/create", createData);
router.put("/kategori/update/:id", updateCategory);
router.delete("/kategori/delete/:id", deleteCategory);

module.exports = router;
