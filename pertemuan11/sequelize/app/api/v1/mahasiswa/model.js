import {DataTypes} from "sequelize";
//import koneksi db nya 

import sequelize from "../../../utils/db_config.js";
//ngambil data dari db_yang sudah di buat config.js
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
            //defult nya semua field  table dalam sequelize itu notNull
            allowNull: false,
            //validasi level databese menggunakan sequlize 
            //validasi dalam satu field table boleh lebih dari satu 
            //contoh dibawah ini adalah validasi :
            //1. inputan tidak boleh kosong / ""(string kosong)
            //2. inputan minimal string 4 huruf maksimal string 10huruf
            validate: {
                notEmpty:{
                    msg :"Nama mahasisawa tidak bileh kosong"
                },
                //2
                len:{
                    args:[4,10],
                    msg:"Nama Mahasiswa Nim.4 / Max.10 Karekter"
            }
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull: false,
             //memberikan nilai default sesuai dengan DETETIME saat ini 
            defaultValue: DataTypes.NOW
           
        },
        updateAt:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue : DataTypes.NOW
        }

}
}
)
sequelize.sync();
export default Mahasiswa;