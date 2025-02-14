import {DataTypes} from "sequelize";


import sequelize from "../../../utils/db_config.js";

const kategori = sequelize.define("kategori",
    {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
            allowNull: false
        },
        nama_kategori:{
            
            type: DataTypes.STRING(45),
            allowNull: false,
            validate: {
                notEmpty:{
                    msg :"Nama Kategori tidak bileh kosong"
                },
                //2
                len:{
                    args:[4,10],
                    msg:"Nama Kategori Nim.4 / Max.20 Karekter"
            }
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
           
        },
        updateAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue : DataTypes.NOW
        }

}
},{
    freezeTableName: true
})
sequelize.sync();
export default kategori;