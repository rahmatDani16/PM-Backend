
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import router from "./api/v1/product/router.js";

// ​‌‍‌⁡⁣⁣⁡⁣⁣⁢𝗸𝗼𝗻𝗳𝗶𝗴𝘂𝗿𝗮𝘀𝗶 𝘂𝘁𝗮𝗺𝗮 𝘂𝗻𝘁𝘂𝗸 𝘁𝗲𝗺𝗽𝗹𝗮𝘁𝗲 𝘆𝗮𝗻𝗴 𝗯𝗲𝗿𝗮𝗱𝗮 𝗱𝗶𝗱𝗮𝗹𝗮𝗺 𝗱𝗶𝗿𝗲𝗸𝘁𝗼𝗿𝗶 𝗽𝘂𝗯𝗹𝗶𝗰⁡​

import { fileURLToPath } from "url";

const app = express();

// ​‌‍‌⁡⁣⁢⁣app.set("view engine", "ejs") digunakan untuk mengatur view engine pada express⁡​
app.set("view engine", "ejs");

// ​‌‍‌⁡⁣⁢⁣app.use(expressEjsLayouts) digunakan menggunakan express-ejs-layouts⁡​
app.use(expressEjsLayouts);

//​‌‍‌⁡⁣⁢⁣app.set("layout", "template/parent") digunakan untuk mengatur layout menggunakan ejs⁡​
app.set("layout", "./template/app");

// ​‌‍‌⁡⁣⁢⁣const __dirname digunakan untuk mengambil direktori dari file tersebut⁡​
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ​‌‍‌⁡⁣⁢⁣agar file css dan js kebaca maka gunakan express.static()⁡​
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.render("Ini route utama");
// });
// app.get("/dashboard", (req, res) => {
//   res.render("template/parent");
// });

app.use("/product", router);

app.listen(3000, () => {
  console.log("Server berjalan di port 3000");
});
