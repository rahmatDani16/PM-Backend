//ini file koneksi DB

import mysql from "mysql2";

const connect = mysql.createConnection({
    host: "localhost",
    user:"rahmatv",
    password: "Bismillah123!",
    database: "db_exspress"
});

export default connect