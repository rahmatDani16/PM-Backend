import express from "express";
import { tampilData } from "./controller.js";

const router = express.Router();

router.get("/", tampilData);

export default router;