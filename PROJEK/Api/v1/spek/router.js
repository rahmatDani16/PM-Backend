import express from "express";

import { tampilSpek } from "./controller.js";

const router = express.Router();

router.get("/", tampilSpek);
export default router;