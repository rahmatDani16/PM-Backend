import {DataTypes} from "sequelize";
//import koneksi db nya 

import sequelize from "../../../utils/db_config.js";
//dfinisikan nama tabel beserta field didalam nya 

const Mahasiswa = sequelize.define("mahasiswa",
    {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
            allowNull: false
        },
        nama:{
            //DataTypes.STRING(99) akan menjadi varchar(99)
            //DataTypes.STRING akan menjadi varchar(255)
            type: DataTypes.STRING(99),
            allowNull: true
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
            //memberikan nilai default sesuai dengan DETETIME saat ini 
        },
        updateAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue : DataTypes.NOW
        }

}
) 
sequelize.sync();
export default Mahasiswa;