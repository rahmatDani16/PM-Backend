const { modelBuku, modelKategori } = require("../models/relasi.js");
const { check, validationResult } = require("express-validator");
const path = require("path");
const fs = require("fs/promises");
const Buku = require("./model.js");

const getData = async (req, res) => {
    try {
        const buku = await modelBuku.findAll({
            include: {
                model: modelKategori,
                attributes: ["nama_kategori"]
            }
        });

        res.json({
            status: 200,
            message: "Data Buku",
            data: buku
        });
    } catch (error) {
        res.json({
            status: 500,
            message: error.message
        });
    }
};

const validasi = [
    check("judul_buku")
        .not().isEmpty().withMessage("Judul Buku tidak boleh kosong")
        .isLength({ min: 5 }).withMessage("Judul Buku minimal 5 karakter")
        .custom(async (value) => {
            await modelBuku.findOne({
                where: { judul_buku: value }
            }).then((data) => {
                if (data) {
                    return Promise.reject("Judul Buku sudah ada, silakan isi yang lain");
                }
            });
        }),
    check("kategori_id").not().isEmpty().withMessage("Kategori tidak boleh kosong"),
    check("penulis").not().isEmpty().withMessage("Penulis tidak boleh kosong"),
    check("deskripsi").not().isEmpty().withMessage("Deskripsi tidak boleh kosong"),
    check("sampul").custom(async (value, { req }) => {
        if (!req.file) {
            throw new Error("Gambar tidak boleh kosong");
        }
    })
];

const createData = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            if (req.file) {
                fs.unlink(req.file.path);
            }
            return res.status(400).json({ message: error.array() });
        }

        const { judul_buku, kategori_id, penulis, deskripsi } = req.body;
        const sampulBuku = req.file.filename;

        const tambah = await modelBuku.create({
            judul_buku,
            kategori_id,
            penulis,
            deskripsi,
            sampul: sampulBuku
        });

        res.json({
            status: 201,
            message: "Data berhasil ditambahkan",
            data: tambah
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const findData = async (req, res) => {
    try {
        const id = req.params.id;
        const hasil = await modelBuku.findOne({
            where: { id: id },
            include: { model: modelKategori }
        });

        res.status(200).json({
            message: "Data Buku",
            data: hasil
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateData = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            if (req.file) {
                fs.unlink(req.file.path);
            }
            return res.status(400).json({ message: error.array() });
        }

        const id = req.params.id;
        const updateId = await modelBuku.findByPk(id);
        let gambar = "";

        if (!req.file) {
            gambar = updateId.sampul;
        } else if (!req.file && !updateId.sampul) {
            gambar = "";
        } else {
            const pathFile = path.resolve('./app/public/uploads/' + updateId.sampul);
            if (updateId.sampul) {
                fs.unlink(pathFile);
            }
            updateId.sampul = req.file.filename;
            gambar = req.file.filename;
        }

        const { judul_buku, kategori_id, penulis, deskripsi } = req.body;

        const ubah = await modelBuku.update(
            { judul_buku, kategori_id, penulis, deskripsi, sampul: gambar },
            { where: { id: id } }
        );

        res.json({
            status: 201,
            message: "Data berhasil diubah",
            data: ubah
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteData = async (req, res) => {
    try {
        const id = req.params.id;
        const buku = await modelBuku.findByPk(id);

        if (!buku) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }

        const filePath = path.resolve('./app/public/uploads/' + buku.sampul);
        if (buku.sampul) {
            fs.unlink(filePath);
        }

        await modelBuku.destroy({ where: { id: id } });

        res.status(200).json({ message: "Data buku berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getData,
    createData,
    validasi,
    findData,
    updateData,
    deleteData
};
