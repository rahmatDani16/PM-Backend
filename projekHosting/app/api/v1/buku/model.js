// Import Sequelize
const { DataTypes } = require("sequelize");

// Koneksi DB
const sequelize = require("../../../utils/config_db.js");

// Import Kategori (jika dibutuhkan)
// const Kategori = require("../kategori/model.js");

// Mendefinisikan struktur tabel
const Buku = sequelize.define("buku", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    judul_buku: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    kategori_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "kategori",
            key: "id"
        }
    },
    penulis: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    sampul: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    freezeTableName: true
});

// Buku.belongsTo(Kategori) (jika dibutuhkan)

// Sinkronisasi model dengan database
sequelize.sync();

module.exports = Buku;
