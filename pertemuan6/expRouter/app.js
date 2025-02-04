import express from "express";
import routerProduct from "./route/produk.js";

const app = express();

//cara menggunakan route hasil import
//maka dapat menggunakan apa level middleware

app.use("/product",routerProduct);


app.listen(3000,()=>{
    console.log("Server is running...");
    
})