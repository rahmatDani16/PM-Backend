import express from "express";
import sequelize  from "./app/utils/db_config.js";
import routerMahasiswa from "./app/api/v1/mahasiswa/router.js"

const app = express();
const patternAPi = "/api/v1"

//cek kondisi DB
//
app.use(express.json())
app.use(patternAPi,routerMahasiswa);

app.listen(3100,()=>{
    console.log("server jalan dengan penuh kesuksesan huuuu......");
    
})