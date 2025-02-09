import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import routerProduct from "./Api/v1/product/router.js";
import routerSpek from "./Api/v1/spek/router.js";
import { fileURLToPath } from "url";

const app = express();
app.set("view engine", "ejs");
                                   
app.use(expressEjsLayouts);

app.set("layout", "./template/app");

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, "public")));


app.use("/product", routerProduct);

app.use("/spek", routerSpek);

app.listen(3000, () => {
  console.log("Server berjalan di jalan yang benar dan penuh keberkahan...");
});
