// import model from "./model.js";
import { modelBuku ,modelKategori} from "../models/relasi.js"
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
const findByPK = async (req,res) =>{
    try{
        const id = req.params.id
        const hasil = modelBuku.findOne({
            
        })

    }catch (error){

    }
}
export{
    getData

}