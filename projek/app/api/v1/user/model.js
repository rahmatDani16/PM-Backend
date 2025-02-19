import { DataTypes } from "sequelize";
//koneksi DB nya
import sequelize from "../../../utils/db_config.js";

const user = sequelize.define("user",
    {
        id:{
            type : DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            allowNull : false
        },
        username: {
            type : DataTypes.STRING(50),
            allowNull: false,
        },
        email : {
            type : DataTypes.STRING(100),
            allowNull : false
        },
        password : {
            type : DataTypes.STRING(255),
            allowNull : false

        },
        profil : {
            type : DataTypes.STRING(255),
            allowNull : false
        },
        createdAt: {
            type : DataTypes.DATE,
            allowNull : true
        },
        updatedAt : {
            type : DataTypes.DATE,
            allowNull : true
        }
},{
    freezeTableName : true
})
sequelize.sync()
export default user