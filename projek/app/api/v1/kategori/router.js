import express from "express"
//ini import dari controller
import {getData,createData,getById,deleteData,updateData} from "./controller.js"
const router = express.Router();

router.get("/kategori",getData);
router.post("/kategori/create",createData)
router.get("/kategori/:id",getById)
router.delete("/kategori/:id",deleteData)
router.put("/kategori/:id",updateData)

export default router
