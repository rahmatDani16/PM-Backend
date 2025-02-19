import { check, validationResult } from "express-validator";
import path from "path";
import fs from "fs/promises";
import user from "../user/model.js";
import bcrypt from "bcrypt";

const getData = async (req, res) => {
    try {
        const data = await user.findAll();
        res.status(200).json({
            status: 200,
            message: "Data berhasil diambil",
            data: data
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const validasiUser = [
    check("username").not().isEmpty().withMessage("Username tidak boleh kosong"),
    check("email")
        .not().isEmpty().withMessage("Email tidak boleh kosong")
        .isEmail().withMessage("Format email tidak valid"),
    check("password")
        .not().isEmpty().withMessage("Password tidak boleh kosong")
        .isLength({ min: 6 }).withMessage("Password minimal 6 karakter"),
    check("confirmPassword")
        .not().isEmpty().withMessage("Konfirmasi password tidak boleh kosong")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error("Password dan Konfirmasi Password tidak sama");
            }
            return true;
        }),
        check("profil")
        .custom((value, { req }) => {
            if (!req.file) {
                throw new Error("Gambar tidak boleh kosong");
            }
            return true;
        })
];

const createData = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            if (req.file) await fs.unlink(req.file.path);
            return res.status(400).json({ message: errors.array() });
        }

        const { username, email, password } = req.body;
        const foto = req.file.filename;

        const existingUser = await user.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "Email sudah terdaftar" });
        }

        const hashing = await bcrypt.hash(password, 10);
        const simpan = await user.create({ username, email, password: hashing, profil: foto });

        res.status(201).json({ message: "Data user berhasil ditambahkan", data: simpan });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateData = async (req, res) => {
    try {
        // Validasi input
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: "Validasi gagal",
                errors: errors.array(),
            });
        }

        const id = req.params.id;
        const updateId = await user.findByPk(id);
        if (!updateId) {
            return res.status(404).json({ message: "User tidak ditemukan" });
        }
        let gambar = updateId.profil;
        if (req.file) {
            if (updateId.profil) {
                const pathFile = path.resolve("./app/public/uploads/" + updateId.profil);
                await fs.unlink(pathFile);
            }
            gambar = req.file.filename; 
        }
        const { username, email, password } = req.body;
        let hashing = updateId.password;

        if (password) {
            hashing = await bcrypt.hash(password, 10);
        }

        await user.update(
            { username, email, password: hashing, profil: gambar },
            { where: { id: id } }
        );

        res.status(200).json({
            status: 200,
            message: "Data user berhasil diperbarui",
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getById = async (req, res) => {
    try {
        const data = await user.findOne({
            where: { 
                id: req.params. id 
            }
        });

        if (!data) {
            return res.status(404).json({
                message: "Data tidak ditemukan"
            });
        }
        res.status(200).json({
            status: 200,
            message: "Data berhasil di tampilkan",
            data: data
        });

    } catch (error) {
        res.status(400).json({
            message: "Terjadi kesalahan",
            error: error.message
        });
    }
};

export { getData, createData, updateData, getById, validasiUser };
