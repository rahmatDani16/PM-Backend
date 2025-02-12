import express from "express";
import { tampilData } from "./controller.js";

const router = express.Router();

router.get("/dashboard", tampilData);

export default router;
