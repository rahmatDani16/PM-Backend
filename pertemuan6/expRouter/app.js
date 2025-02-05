import express from "express";
import routerProduct from "./route/produk.js";

const app = express();

//cara menggunakan route hasil import
//maka dapat menggunakan apa level middleware

app.use("/product",routerProduct);

//isinya 
//1. import semua rauter app 
//2. app level middleware - app.use()
//- express.json()
//- urlEncode()
//- routing pattren 
//3; pattren api direktori 


app.listen(3000,()=>{
    console.log("Server is running...");
    
})