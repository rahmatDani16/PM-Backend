const {DataTypes } = require("sequelize");
const db = require("../../../utils/db_mobile.js");

const Carts = db.define("carts", 
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
        drink_id :{
            type : DataTypes.INTEGER,
            allowNull : false  
        },
        quantity : {
            type : DataTypes.INTEGER,
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

module.exports = Carts;