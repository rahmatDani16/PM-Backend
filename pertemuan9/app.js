import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import dataMahasantri from "../pertemuan7/Projek/model/mahasantri.js"; 

const app = express();
const PORT = 3100;

// Konfigurasi view engine dan layout
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("layout", "./template/parent");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, "public")));

// Contoh route yang menggunakan dataMahasantri
app.get("/dashboard", (req, res) => {
  res.render("template/parent", { dataMahasantri });
});

app.get("/", (req, res) => {
  res.send("Ini route / (utama)");
});

app.listen(PORT, () => {
  console.log("Server sedang ada masalah hati.....");
});
