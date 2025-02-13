import express from "express";
import sequelize  from "./app/utils/db_config.js";
import routerKategori from "./app/api/v1/kategori/router.js"

const app = express();
const patternAPi = "/api/v1"

app.use(express.json())
app.use(patternAPi,routerKategori);

app.listen(3000,()=>{
    console.log("Server Sedang ada dijalan....");
    
})