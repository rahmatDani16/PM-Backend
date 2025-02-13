//Ini file koneksi nya 

import {Sequelize} from "sequelize";
import dontenv from "dotenv";

//jika ingin menggunakn isi file dontenv maka cantumkan kode dibawah ini 
dontenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,{
    host : process.env.DB_HOST,
    dialect: process.env.DB_DIALECT

})
export default sequelize

