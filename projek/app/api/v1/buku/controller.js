// import model from "./model.js";
import { modelBuku ,modelKategori} from "../models/relasi.js"
//menambahkan funsi untuk menambahkan data
import {check,validationResult} from "express-validator"
import path from "path";
import fs from "fs/promises";
const getData = async (req,res)=>{
    try{
        //kalau ingin menampilkan data selain ID dari tabel master/utama
        //maka gunakan include
        const buku = await modelBuku.findAll({
            include: {
               model: modelKategori,
                attributes:["nama_kategori"]
            }
        })
        res.json({
            status : 200,
            message : "Data Buku",
            data : buku
        })
    }catch(error){
        res.json({
            status : 500,
            message : error.message
        })
    }
    
}
//buat variabel validasi 
//nantinya variabel ini akan di gunakan sebagai level middleware 
const validasi = [
    //validasi field judul_buku
    check("judul_buku")
   
    //buat mengkastem pesan error nya 
    //ini validasi tidak boleh kosong/mengirimkan string kosong
    .not().isEmpty().withMessage("Judul buku tidak boleh kosong")
    //validasi membatasi string kter
    .isLength({min:5}).withMessage("Judl buku minimal 3 karakter")
    .custom(async (value)=>{
    //     //findOne di gunakan untuk mencari record yang cocok 
    //     const buku = await modelBuku.findOne({
    //         //where adalah untuk mencari judul buku yang sama 
    //         where: {
    //             judul_buku : value
    //         }
    //     })
    //     if(buku){
    //         return Promise.reject( "Judul buku sudah ada")
    //     }
    //     return true
    //validai dengan then
     await modelBuku.findOne({
        where :{
            judul_buku : value
        }
    }).then((data) =>{
        if(data) {
            return Promise.reject("Judul buku sudah ada")
        }
    })
    }),
    //validasi field kategori_id
    check("kategori_id")
    .not().isEmpty().withMessage("Kategori Tidak boleh Kosong"),
    //validasi field penuilis
    check("penulis")
    .not().isEmpty().withMessage("Panulis tidak Boleh Kosong"),
    //validasi field untuk deskripsi
    check("deskripsi")
    .not().isEmpty().withMessage("Deskripsi tidak boleh Kosong"),
    //default validasi custom itu tidak bisa menerima req, res
    //oleh karena itu variabel req/res ditambahkan secara manual mengunakan 
    check("sampul") 
    .custom((value, {req}) => {
        if(!req.file){
            throw new Error("Gambar tidak boleh kosong")
        }
    })
]
const createData = async (req,res) =>{
    try{

        // const error = validationResult(req)
        // if(!error.isEmpty()){
        //     return res.status(400).json({
        //         message : error.array()
        //     })
        // }

        const {judul_buku,kategori_id,penulis,deskripsi} = req.body
        //tangkap imputan file
        const sampulBuku = req.file.filename

        const tambah = await modelBuku.create({
            judul_buku,
            kategori_id,
            penulis,
            deskripsi,
            sampul : sampulBuku
        })
        res.json({
            status : 200,
            message : "Data Berhasil di Tambahkan",
            data : tambah
        })
    }catch(error){
        res.status(400).json({
            message : error.message
        })
    }
}
const findData = async (req,res) =>{
    try{
        const id = req.params.id
        const hasil = modelBuku.findOne({
            
        })

    }catch (error){

    }
}
const updateData = async (req,res) =>{
    try{
        // const error = validationResult(req)
        // if(!error.isEmpty()){
        //     if(req.file){
        //         fs.unlink(req.file.path)
        //     }
        //     return res.status(400).json({
        //         message : error.array()
        //     })
        // }
        const id = req.params.id;
        const updateId = await modelBuku.findByPk(id)
        let gambar = ""

        // if(!req.file){
        //     gambar = updateId.sampul;
        // }else if (!req.file && !updateId.sampul){
        //     gambar = ""
        // }else {
        //     const pathFile = path.resolve("./app/public/uploads/" + updateId.sampul);
        //     if(updateId.sampul){
        //         fs.unlink(pathFile)
        //     }
        //     updateId.sampul = req.fle.filename;
        //     gambar =req.file.filename
        //  }
         const {judul_buku,kategori_id,penulis,deskripsi} = req.body
         const ubah = await modelBuku.update({
            judul_buku,
            kategori_id,
            penulis,
            deskripsi,
            sampul: gambar
         },{
            where : {
                id : id
            }

         })
         res.json({
            status : 201,
            message : "Data berhasil di update",
            data : ubah
         })
    }catch (error){
        res.status(400).json({
            message : error.message
        })
    }
}
const deleteData = async (req,res) =>{
    try{
        const {id} = req.params
        const buku = await modelBuku.findByPk(id)

        if(!buku){
            return res.status(400).json({
                status : 400,
                message : "Buku Tidak ditemukan"
            })
        }
        if(buku.sampul){
            const pathFile = path.resolve("./app/public/uploads/" + buku.sampul);
            fs.unlink(pathFile)
        }
        await modelBuku.destroy({
            where : {
                id
            }
        })
        res.json({
            status : 200,
            message : "Data buku berhasil dihapus "
        })


    }catch(error) {
        res.status(400).json({
            message : error.message
        })

    }
}
export{
    createData,
    validasi,
    getData,
    findData,
    updateData,
    deleteData

}