// Import semua tabel yang berhubungan/relasi
const modelBuku = require("../buku/model.js");
const modelKategori = require("../kategori/model.js");

// Definisikan hubungan antar tabel
modelKategori.hasMany(modelBuku, { foreignKey: "kategori_id" });
modelBuku.belongsTo(modelKategori, { foreignKey: "kategori_id" });

// model4.hasOne(model3)
// model3.belongsTo(model4)

module.exports = {
    modelBuku,
    modelKategori
};
