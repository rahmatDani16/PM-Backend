import express from "express";
import routerMahasantri from "./router/router.js";

 const app = express();
 app.use(express.json());
 const PORT = 3000

app.use("/mahasantri",routerMahasantri);

app.listen(3000,()=>{
    console.log("Server is running...");    
})
