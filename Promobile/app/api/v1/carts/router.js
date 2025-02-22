const express = require('express');
const {getData,createData,getById,updateData,deleteData} = require('./controller.js');

const router = express.Router();

router.get("/carts", getData);
router.get("/carts/:id", getById);
router.post("/carts/create", createData);
// router.put("/carts/update",updateData);
router.delete("/carts/:id" ,deleteData)


module.exports = router