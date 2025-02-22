const {DataTypes} = require("sequelize");
const db = require("../../../utils/db_mobile.js");

const pesanan = db.define("pesanan",
    {
        id : {
             type : DataTypes.INTEGER,
             primaryKey : true,
             autoIncrement : true,
             allowNull : false
        },
        user_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        total_harga : {
            type : DataTypes.DEFAUL,
            allowNull : false
        },
        //quantity
        createdAt : {
            type : DataTypes.DATE,
            allowNull : false
        },
        updatedAt : {
            type : DataTypes.DATE,
            allowNull : false
        }
    },{
        freezeTableName : true
    }
)
db.sync();
module.exports = pesanan;