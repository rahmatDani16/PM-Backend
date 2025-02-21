const { DataTypes } = require("sequelize");
const db = require("../../../utils/config_db.js");
// const Buku = require("../buku/model.js");

const Categories = db.define("kategori", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nama_kategori: {
        type: DataTypes.STRING(40),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Nama Kategori Tidak Boleh Kosong"
            }
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW
    }
}, {
    freezeTableName: true,
});

// Categories.hasMany(Buku);
db.sync();

module.exports = Categories;
