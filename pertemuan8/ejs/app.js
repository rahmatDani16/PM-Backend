
import express from "express";
const app = express(); 

//app.use()


/* melakukan konfigurasi middleware untuk aplikasi
 gunakan app.set */
// syaratnya harus install ejs (npm i ejs) 
app.set("view engine","ejs");

app.get("/",(req,res)=>{
  res.send("<h1>INI ROUTE</h1>")   
})

app.get("/home", (req, res) => {
    //mengakses atau menampilkan isi file
  res.render("view/home");
});

app.listen(3010, () => {
    console.log("server is running..........");
});