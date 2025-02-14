import modelKategori from "./model.js";
//Fungsi untuk menamplikan data dari tabel mahasiswa 
const getData = async (req, res) => {
     try{
          // ini hasilnya sama kayak select * from 
          const kategori = await modelKategori.findAll()
          if(kategori.length === 0){
               return  res.json({
                      status : 400,
                      message : "Data kategori boleh Kosong "
                 })
            }
          //buat respon JSON nya
        return  res.json({
               status : 200,
               message : "Data Kategori",
               data : kategori
          })
     }catch(error){
        return  res.json({
               status : 500,
               message : error.message
          })
     }
};
// ini insert  into
const createData = async (req,res) =>{
     try{
          const {nama_kategori} = req.body
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
        return  res.json({
               status : 200,
               message: "Data kategori behasil di tambahkan ",
               data : tambah
          })
     }catch(error){
        
         return res.json({
               status : 400,
               message : error.message
          })

     }
}
//findByPK
const getById = async (req,res)=>{
     //butuh req,params untuk mendapatkan id data yang di maksud
     try{
          const idCari = req.params.id
          if(idCari === ""){
               return  res.json({
                      status : 400,
                      message : "Id kategori boleh Kosong "
                 })
            }
          const kategoriId = await modelKategori.findByPk(idCari);
          if(!kategoriId){
               return  res.json({
                      status : 400,
                      message : "kategori tidak ditemukan "
                 })
            }
         return res.json({
               status : 200,
               message: "Data Kategori",
               data:kategoriId
          })
     }catch(error){
         return res.json({
               status : 500,
               message : error,meassage
          })
     }
}
// //delete
const deleteData = async (req,res)=>{
     try{
          const {idCari} = req.params;
          if (!idCari) {
               return res.json({
                   status: 400,
                   message: "Data kategori tidak ada"
               });
           }
          await modelKategori.destroy({where :{id:idCari}})
          return res.json({
               staus:200,
               message : "Data Kategori berhasil di hapus"
          }) 
     }catch(error){ 
          return res.json({
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
          if (!idCari || !nama_kategori) {
               return res.json({
                   status: 400,
                   message: "Id kategori dan nama kategori tidak boleh kosong"
               });
           }
          await modelKategori.update(
               {
                    nama_kategori
               },{
                    where:{
                         id : idCari
                    }

               }
          );
       return   res.json({
               status : 200 ,
               message : "Data Kategori di update"
          })
     }catch(error){
        return  res.json({
               status : 500,
               message : error.message
          })
     }
}
export {
     getData ,
     createData,
     getById,
     deleteData,
     updateData
    };

