import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
//konfigurasi pertama untuk template yang berada didalamdirektori
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3100;
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("layout", "./template/parent");
//cek path direktori saat ini
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//agar file css dan js terbaca maka gunakan expres.static()
app.use(express.static(path.join(__dirname, "/public")));

//default express tidakbisa membaca langsung file css dan library js
//oleh karena itu perlu dilakukan terlebih dahulu konfigurasi
//agar file css dan js yang ada didalam folder public dapat terbaca disemua file
//yang ada didalam projek

app.get("/", (req, res) => {
  res.send("Ini route / (utama)");
});

app.get("/dashboard", (req, res) => {
  res.render("template/parent");
});

app.listen(PORT, () => {
  console.log("Server di jalankan...");
});