import express from "express";
import { renderMahasantri, getAll, getBY, pushData, deleteData } from "./controller.js";

const router = express.Router();

router.get("/view", renderMahasantri);

router.get("/parent", (req, res) => {
    res.render("template/parent", {});
  });

router.get("/", getAll);
router.get("/:id", getBY);
router.post("/", pushData);
router.delete("/:id", deleteData);

export default router;
