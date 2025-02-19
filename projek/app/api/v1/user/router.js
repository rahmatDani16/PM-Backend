import express from "express";

import {getData, createData,updateData,getById} from "./controller.js";
import uploadImage from "../middleware/uploadimage.js";
import { validasiUser } from "../user/controller.js";
import { login, register } from "./auth.js";

const router = express.Router();

router.get("/user", getData);
router.post("/user/create",validasiUser, uploadImage.single("profil"), createData);
router.put("/user/update/:id",validasiUser, uploadImage.single("profil"), updateData);
router.get("/user/:id", getById);
router.post("/login",login);
router.post("/register",register);




export default router