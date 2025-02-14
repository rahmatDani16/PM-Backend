// import semua tabel yang berhubumgan/relasi
import modelBuku from "../buku/model.js";
import modelKategori from "../kategori/model.js";

//definisikan hubungan antar tabel struktur tersebut 
//hesOne?
//hasMany?
//belongsTO

modelKategori.hasMany(modelBuku,{foreignKey:"kategori_id"});
modelBuku.belongsTo(modelKategori,{foreignKey:"kategori_id"});

export{
    modelBuku,
    modelKategori
}