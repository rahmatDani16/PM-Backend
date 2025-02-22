const { DataTypes} = require("sequelize");

const db = require("../../../utils/db_mobile.js");

const Minuman = db.define("minuman",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        nama_minuman : {
            type : DataTypes.STRING(50),
            allowNull : false
        },
        harga :{
           type:  DataTypes.DECIMAL(10,2),
            allowNull : false
        },
        deskripsi : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        createdAt : {
            type : DataTypes.DATE,
            allowNull : true
        },
        updatedAt : {
            type : DataTypes.DATE,
            allowNull : true
        }


    },{
        freezeTableName : true
    }
)

db.sync();
module.exports = Minuman;