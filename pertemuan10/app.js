import exspress from "express";
import connect  from "./koneksi.js";

const app = exspress();
app.use(exspress.json());


// app.get("./",(req,res)=>{
//     if(connect){
//         console.log("Database connect");
        
//     }
// })

//untuk menggunakan pesan error lebih mudah menggunakn 
//asyc await dan mysql2/promise
//async await adalah fungsi 
//error hendling nya mengunakan try cacth 
//agar kode nya mudah dibaca 
//jika berjalan maka blok kode try akan di baca 
//jika salah maka catch di baca

//kalau n=emnggunakan callback rawan callback hell
//memungkinkan juga kode akan terlihat lebih banyak 

//fungsi untuk menampilkan data user dri tabel usercs
// middleware/validateUser.js
const validateUser = (req, res, next) => {
    const { username, email } = req.body;

    if (typeof username !== 'string'  === '') {
        return res.status(400).json({
            message: "Username harus berupa string dan tidak boleh kosong"
        });
    }
    if (typeof email !== 'string' === '') {
        return res.status(400).json({
            message: "Email harus berupa string dan tidak boleh kosong"
        });
    }

    next();
};

app.get("/users",(req,res)=>{
    const sql = "SELECT * FROM users"
    connect.query(sql,(err,result)=>{
        if(sql){
            res.status(200).json({
                message: "Data users ",
                data: result
            });
        }else{
            res.status(500).json({
                massege :err.message
            });
        }
    })
})
app.get("/users/:id", (req, res) => {
    const { id } = req.params;

    const sql = "SELECT * FROM users WHERE id" ;

    connect.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            });
        }
        if (result.length === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        res.status(200).json({
            message: "User data retrieved successfully",
            data: result[0] 
        });
    });
});


app.post("/users", validateUser,(req, res) => {
    const { username, email } = req.body;
    if (!username || !email) {
        return res.status(400).json({ message: "Username and email harus benar" });
    }

    const sql = "INSERT INTO users (username, email) VALUES (?, ?)";
    connect.query(sql, [username, email], (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(201).json({
            message: "Menambah User successfully",
            data: { id: result.insertId, username, email }
        });
    });
});

app.put("/users/:id", validateUser,(req, res) => {
    const { id } = req.params;  
    const { username, email } = req.body;  

    if (!username || !email) {
        return res.status(400).json({ message: "Username and email harus benar/harus terisi" });
    }
    const sql = "UPDATE users SET username = ?, email = ? WHERE id = ?";
    connect.query(sql, [username, email, id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        res.status(200).json({
            message: "User updated successfully",
            data: { id, username, email }
        });
    });
});

app.delete("/users/:id", (req, res) => {
    const { id } = req.params; 

    if (!id) {
        return res.status(400).json({ message: "id tidak ditemukan" });
    }

    const sql = "DELETE FROM users WHERE id = id";
    connect.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({
                 message: err.message
                 });
        }
        
        res.status(200).json({
            message: "User deleted successfully",
            data: { id }
        });
    });
});


app.listen(3000,()=>{
    console.log("Server ada  di jalan...");
    
})
