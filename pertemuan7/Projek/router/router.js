import express from "express";
import { getAll, getBY, pushData, deleteData} from"../controller/mahasantri.js";

const router = express.Router();

router.get("/", getAll); 
router.get("/:id", getBY);
router.post("/", pushData);
router.delete("/:id", deleteData);

export default router