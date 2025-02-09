import electronic from "./model.js";

const tampilData = (req, res) => {
  res.render("template/product/index", {
    products: electronic,
    judul: "Daftar Produk",
  });
};

export { tampilData };