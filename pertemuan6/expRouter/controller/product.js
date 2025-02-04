
//isinya fungsi untuk mengelola data produk 
//import model 
import dataProduct from "../model/product.js";


const getAll = (req,res) =>{
    res.json({
        status : 200,
        message : "data Product ",
        data: dataProduct 
    })

}

const editData = (req,res)=>{
    res.json({
        status : 200,
        message : "Eit Data Poduct ",
        data : "Edit Data Product "
    })
}

//fungsi : 
//1. menghapus ,
//2. melihat data berdasarkan index,
//3. logika laimya (termasuk validasi )

export {getAll,editData}