import modelKategori from "./model.js";
//Fungsi untuk menamplikan data dari tabel mahasiswa 
const getData = async (req, res) => {
     try{
          // ini hasilnya sama kayak select * from 
          const kategori = await modelKategori.findAll()
          //buat respon JSON nya
          res.json({
               status : 200,
               meassage : "Data Kategori",
               data : kategori
          })
     }catch(error){
          res.json({
               status : 500,
               message : error.message
          })
     }
};
// ini insert  into
const createData = async (req,res) =>{
     try{
          //ini perlu menangkap req.body
          const {nama_kategori} = req.body
          //memeriksa inputan 
          //kalau mau bikin middleware juga bisa
          if(nama_kategori === ""){
             return  res.json({
                    status : 400,
                    message : "Nama kategori boleh Kosong "
               })
          }
          //proses untuk insert data 
          const tambah = await modelKategori.create(
               {nama_kategori}
          )
          res.json({
               status : 200,
               message: "Data kategori behasil di tambahkan ",
               data : tambah
          })
     }catch(error){
        
          res.json({
               status : 400,
               message : error.message
          })

     }
}
//findByPK
const findByPK = async (req,res)=>{
     //butuh req,params untuk mendapatkan id data yang di maksud
     try{
          const idCari = req.params.id
          const mahasiswaId = await modelKategori.findByPk(idCari);
          res.json({
               status : 200,
               messagew: "Data Kategori",
               data: mahasiswaId
          })
     }catch(error){
          res.json({
               status : 500,
               message : error,meassage
          })
     }
}
// //delete
const deleteData = async (req,res)=>{
     try{
          const idCari = req.params.id
          await modelKategori.destroy({where :{id:idCari}})
          res.json({
               staus:200,
               message : "Data Kategori berhasil di hapus"
          }) 
     }catch(error){
          res.json({
               status: 500,
               message : error.message
          })
     }
}
// //update 
const updateData = async (req,res)=>{
     try{
          const idCari = req.params.id
          const {nama_kategori} = req.body
          await modelKategori.update(
               {
                    nama_kategori
               },{
                    where:{
                         id : idCari
                    }

               }
          );
          res.json({
               status : 200 ,
               message : "Data Kategori di update"
          })
     }catch(error){
          res.json({
               status : 500,
               message : error.message
          })
     }
}
export {
     getData ,
     createData,
     findByPK,
     deleteData,
     updateData
    };

