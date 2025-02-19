import express from "express";
import { getData, createData, validasi, updateData, findData,deleteData } from "../buku/controller.js";
import uploadImage from "../middleware/uploadimage.js";

const router = express.Router();

router.get("/buku", getData);
router.post("/buku/create",validasi, uploadImage.single("sampul"),  createData);
//single digunakan untuk upload satu image
router.put("/buku/update/:id", uploadImage.single("sampul"), validasi, updateData);
router.get("/buku/:id", findData);
router.delete("/buku/delete/:id", deleteData);

export default router;
