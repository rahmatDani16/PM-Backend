const User = require("./model.js");
const bcrypt = require("bcrypt");

const getData = async (req, res) => {
    // Tambahkan logika di sini
};

const createData = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body;
        //  const foto = req.file.filename;

        // Ini buat memeriksa nilai password yang sama dengan konfirmasi password
        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Password dan Konfirmasi Password tidak sama"
            });
        }

        const hashingPassword = await bcrypt.hash(password, 10);

        const simpan = await User.create({
            username,
            email,
            password: hashingPassword,
        });

        res.status(201).json({
            message: "Data user berhasil ditambahkan",
            data: simpan
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = {
    getData,
    createData
};
