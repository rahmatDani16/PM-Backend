const Minuman = require('./model.js');

const getData = async (req, res) => {
    try {
        const daftarMinuman = await Minuman.findAll({
            order: [['id', 'ASC']] // Urutkan berdasarkan ID secara ascending
        });

        if (daftarMinuman.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Tidak ada data minuman yang ditemukan"
            });
        }

        res.status(200).json({
            success: true,
            message: "Daftar minuman ditemukan",
            data: daftarMinuman
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Terjadi kesalahan saat mengambil daftar minuman",
            error: error.message
        });
    }
};


const getById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({
                success: false,
                message: "ID minuman tidak boleh kosong"
            });
        }

        const minumanId = await Minuman.findByPk(id);
        if (!minumanId) {
            return res.status(404).json({
                success: false,
                message: "Minuman tidak ditemukan"
            });
        }

        res.status(200).json({
            success: true,
            message: "Data Minuman ditemukan",
            data: minumanId
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Terjadi kesalahan saat mengambil data minuman",
            error: error.message
        });
    }
};
const createData = async (req, res) => {
    try {
        const { nama_minuman, harga, deskripsi } = req.body;

        // Validasi input
        if (!nama_minuman || !harga || !deskripsi) {
            return res.status(400).json({
                success: false,
                message: "Semua field (nama_minuman, harga, deskripsi) harus diisi"
            });
        }

        // Tambah data ke database
        const tambah = await Minuman.create({
            nama_minuman,
            harga,
            deskripsi
        });

        res.status(201).json({
            success: true,
            message: "Data minuman berhasil ditambahkan",
            data: tambah
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Terjadi kesalahan saat menambahkan data",
            error: error.message
        });
    }
};
module.exports = { getData, getById, createData };
