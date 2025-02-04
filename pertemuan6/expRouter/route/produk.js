//SIMULASI 
//file ini digunkan untuk mendefinisikan rute
//untuk menglola tabel produk menggunakan proses CRUD 
import express from "express";
// import controllernya
import { getAll, editData } from "../controller/product.js";



//==== INI CONTOH 1 ===//
//import data dari model 
// import dataProduct from "../model/product.js";

//Buat variabel umtuk express router nya 
const router = express.Router();

//Definisikan secara lengkap untuk jalur CRUD nya 
//get,post,put,delete
// router.get("/",(req,res) =>{
//     res.json({
//         status : 200,
//         message: "Data product ",
//         data: {
//             produk : dataProduct
//         }
//     })
// })


//== INI CONTOH 2 ====//
//buat variabel untuk express router nya 
router.get("/",getAll)


// router.get("/edit/:id",(req,res) =>{
//     const {id} = req.params
//     res.json({
//         status : 200,
//         message: " Edit Data produk ",
//         data: {
//             id,
//         }
//     })
// })

export default router