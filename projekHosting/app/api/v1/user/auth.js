const User = require("./model.js");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email dan Password tidak boleh kosong",
            });
        }

        const data = await User.findOne({
            where: { email },
        });

        if (!data) {
            return res.status(400).json({
                message: "Email tidak ditemukan",
            });
        }

        const compare = await bcrypt.compare(password, data.password);
        if (!compare) {
            return res.status(400).json({
                message: "Password salah",
            });
        }

        res.status(200).json({
            message: "Login berhasil",
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
const register = async (req, res) => {  
    try {
        const { username, email, password, confirmPassword } = req.body;
        if (!username || !email || !password || !confirmPassword) {
            return res.status(400).json({
                message: "Semua field harus diisi dengan benar",
            });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Password dan Konfirmasi harus sama",
            });
        }
        const hashing = await bcrypt.hash(password, 10);
        const simpan = await User.create({
            username,
            email,
            password: hashing,
        });
        res.status(201).json({
            message: "Register berhasil",
            data: simpan,    
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
module.exports = { login, register};
