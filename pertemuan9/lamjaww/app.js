import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import router from "./api/v1/product/router.js";


import { fileURLToPath } from "url";

const app = express();

app.set("view engine", "ejs");

                                    
app.use(expressEjsLayouts);

app.set("layout", "./template/app");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));

//   res.render("Ini route utama");
// });
// app.get("/dashboard", (req, res) => {
//   res.render("template/parent");
// });

app.use("/product", router);

app.listen(3000, () => {
  console.log("Server berjalan di port 3000");
});
