const express = require("express");
const path = require("path");
const cors = require("cors");
// const configDB = require("./app/utils/config_db");
const routerKategori = require("./app/api/v1/kategori/router");
const routerBuku = require("./app/api/v1/buku/router");
const routerUser = require("./app/api/v1/user/router");

const app = express();
app.use(cors());
const pathAapi = "/api/v1";

// Ini khusus untuk body raw
// app.use(express.json());

// Jika ada inputan file dari form-
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "app/public/uploads")));

app.use(pathAapi, routerKategori);
app.use(pathAapi, routerBuku);
app.use(pathAapi, routerUser);

// app.get("/", async (req, res) => {
//     try {
//         await configDB.authenticate();
//         console.log("Connection has been established successfully.");
//     } catch (error) {
//         console.error("Unable to connect to the database:", error.message);
//     }
// });

app.listen(3000, () => {
    console.log("server running");
});
