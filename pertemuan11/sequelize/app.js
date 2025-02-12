import express from "express";
import sequelize  from "./app/utils/db_config.js";
import routerMahasiswa from "./app/api/v1/mahasiswa/router.js"

const app = express();
const patternAPi = "/api/v1"

//cek kondisi DB
// app.get("/",async (req,res) => {
//     try{
//         await sequelize.authenticate();
//         console.log("Database berhasil Kontak");
        
//     }catch{
//         console.log(error.message);
        
//     }
// })
// app.use("/mahasiswa",routerMahasiswa);
app.use(express.json())
app.use(patternAPi,routerMahasiswa);
app.listen(3100,()=>{
    console.log("server jalan dengan penuh kesuksesan huuuu......");
    
})