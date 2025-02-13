import express from "express"
//ini import dari controller
import {getData,createData,findByPK,deleteData,updateData} from "./controller.js"

const router = express.Router();

router.get("/kategori",getData);
router.post("/kategori/create",createData)
router.get("/kategori/:id",findByPK)
router.delete("/kategori/:id",deleteData)
router.put("/kategori/:id",updateData)

export default router
