import spek from "./model.js";
const tampilSpek = (req, res) => {
    res.render("template/spek/index", {
      products: spek,
      judul: "Daftar Kategori",
    });
  };

export { tampilSpek };