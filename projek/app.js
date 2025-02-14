import express from "express";
import sequelize  from "./app/utils/db_config.js";
import routerKategori from "./app/api/v1/kategori/router.js"
import routerBuku from "./app/api/v1/buku/router.js";

const app = express();
const path = "/api/v1"

app.use(express.json())
app.use(path,routerKategori);
app.use(path,routerBuku)

app.listen(3000,()=>{
    console.log("Server Sedang ada dijalan....");
    
})