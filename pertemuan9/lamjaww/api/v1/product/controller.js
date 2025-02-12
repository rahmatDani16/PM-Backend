import coffes from "./model.js";

// menampilkan semua data di views

const tampilData = (req, res) => {
  res.render("product/index", {
    products: coffes,
    judul: "Daftar Produk",
  });
};

export { tampilData };
