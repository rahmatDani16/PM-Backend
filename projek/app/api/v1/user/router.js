import express from "express";
import { getData, createData, updateData, getById } from "./controller.js";
import uploadImage from "../middleware/uploadimage.js";
import { validasiUser } from "../user/controller.js";
import { login, register } from "./auth.js";

const router = express.Router();

router.get("/user", getData);
router.post("/user/create", uploadImage.single("profil"), validasiUser, createData);
router.put("/user/update/:id", uploadImage.single("profil"), validasiUser, updateData);
router.get("/user/:id", getById);
router.post("/login", login);
router.post("/register", uploadImage.single("profil"), validasiUser, register);

export default router;
