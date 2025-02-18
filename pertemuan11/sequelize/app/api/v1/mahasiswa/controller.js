import modelMahasiswa from "./model.js";
//Fungsi untuk menamplikan data dari tabel mahasiswa 
const getData = async (req, res) => {
     try{
          // ini hasilnya sama kayak select * from 
          const mahasiswa = await modelMahasiswa.findAll()
          //buat respon JSON nya
          res.json({
               status : 200,
               meassage : "Data mahasiswa",
               data : mahasiswa
          })
     }catch(error){
          res.json({
               status : 500,
               message : error.message
          })
     }
};
//ini insert  into
const createData = async (req,res) =>{
     try{
          //ini perlu menangkap req.body
          const {nama} = req.body
          //memeriksa inputan 
          //kalau mau bikin middleware juga bisa
          if(nama === ""){
             return  res.json({
                    status : 400,
                    message : "Nama tidak boleh Kosong "
               })
          }
          //proses untuk insert data 
          const tambah = await modelMahasiswa.create(
               {nama}
          )
          res.json({
               status : 200,
               message: "Data behasil di tambahkan ",
               data : tambah
          })
     }catch(error){
          //console.log(error)
          //pecah error yang ,menggunakan fungsi array.map
          //error [0]
          //error [1]
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
          const mahasiswaId = await modelMahasiswa.findByPk(idCari);
          res.json({
               status : 200,
               messagew: "Data Mahasiswa",
               data: mahasiswaId
          })
     }catch(error){
          res.json({
               status : 500,
               message : error,meassage
          })
     }
}
//delete
const deleteData = async (req,res)=>{
     try{
          //try  proses akan dijalankan ketika data yang masuk benar.
          const idCari = req.params.id
          await modelMahasiswa.destroy({where :{id:idCari}})
          res.json({
               staus:200,
               message : "Data berhgasil di hapus"
          }) 
     }catch(error){
          //catch dijalakan ketika error /data yang masuk salah.
          res.json({
               status: 500,
               message : error.message
          })
     }
}
//update 
const updateData = async (req,res)=>{
     try{
          const idCari = req.params.id
          const {nama} = req.body
          await modelMahasiswa.update(
               {
                    nama
               },{
                    where:{
                         id : idCari
                    }

               }
          );
          res.json({
               status : 200 ,
               message : "Data berhasil di update"
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

