//koneksi Sequelize 
import { DataTypes } from "sequelize";
//koneksi DB nya
import sequelize from "../../../utils/db_config.js";

//mendefinisikan struktur tabel
//menggunakan  pendekatan konsep code first - db.define()

const Buku = sequelize.define("buku",{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    judul_buku:{
        type : DataTypes.STRING(20),
        allowNull: false
    },
    kategori_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            //model itu nama tabel 
            model :"kategori",
            //key adalah primary dari model/tabelnya
            key: "id"
        }
    },
    penulis:{
        type:DataTypes.STRING(50),
        allowNull: false
    },
    deskripsi:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    sampul : {
        type : DataTypes.STRING(100),
        allowNull : false
    },
    createdAt:{
        type : DataTypes.DATE,
        allowNull: true
    },
    updatedAt:{
        type:DataTypes.DATE,
        allowNull: true
    },
},{
    freezeTableName: true
})
sequelize.sync()
export default Buku