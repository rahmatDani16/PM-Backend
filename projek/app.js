import express from "express";
import multer from "multer";
import sequelize from "./app/utils/db_config.js";
import routerKategori from "./app/api/v1/kategori/router.js";
import routerBuku from "./app/api/v1/buku/router.js";
import routerUser from "./app/api/v1/user/router.js";

const app = express();
const path = "/api/v1";
app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(path, routerKategori);
app.use(path, routerBuku);
app.use(path, routerUser);

app.listen(3000, () => {
    console.log("Server Sedang Berjalan...");
});
