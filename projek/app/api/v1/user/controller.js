import { check, validationResult} from "express-validator";
import path from "path";
import fs from "fs/promises";
import user from "../user/model.js";
import bcrypt from "bcrypt";
const getData = async (req,res) =>{
    try{
        const data = await user.findAll()

        res.json({
            status : 200,
            message : "Data Berhasil di Ambil",
            data : data
        })
    }catch(error){
        return res.status(400).json({
            message : error.message
        })

    }
}
const validasiUser = [
    check("usernama")
    .not().isEmpty().withMessage("Username tidak boleh Kosong"),
    check("email")
    .not().isEmpty().withMessage("Email tidak boleh Kosong"),
    check("password")
    .not().isEmpty().withMessage("Password tidak boleh kosong"),
    check("confirmPassword")
    .not().isEmpty().withMessage("confirmPassword tidak boleh kosong")
    .custom((value, { req }) => {
        if(value !== req.body.password){
            throw new Error("Password dan Confirm Password Tidak Sama")
        }
        return true
    }),
    check("profil")
    .custom((value, {req}) => {
        if(!req.file){
            throw new Error("Gambar tidak boleh kosong")
        }
    })
]

const createData = async (req,res) =>{
    try{
        const {username,email,password,confirmPassword} = req.body
        
        const foto = req.file.filename

        //ini buat memriksa nilai yang password yang sama dengan confirmasi password
        if(password !== confirmPassword){
            return res.status(400).json({
                message : "Password dan Confirm Password Tidak Sama"
            })
        }
        const hashing = await bcrypt.hash(password,10);
        const simpan = user.create({
            username,
            email,
            password : hashing,
            profil : foto
        })
        res.status(200).json({
            message : "Data User Berhasil di Tambahkan",
            data : simpan
        })

    }catch(error){
        res.status(400).json({
            message : error.message
        })

    }
}

const updateData = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            if (req.file) {
                 fs.unlink(req.file.path);
            }
            return res.status(400).json({
                message: error.array()
            });
        }

        const { username, email, password, confirmPassword } = req.body;
        const userId = req.params.id;
        const userData = await user.findByPk(userId);

        if (!userData) {
            return res.status(404).json({
                message: "User tidak ditemukan"
            });
        }

        if (password !== confirmPassword) {
            if (req.file) {
                await fs.unlink(req.file.path);
            }
            return res.status(400).json({
                message: "Password dan Confirm Password Tidak Sama"
            });
        }

        let gambar = "";
        if (req.file) {
            if (userData.profil) {
                const pathFile = path.resolve("./app/public/uploads/" + userData.profil);
                await fs.unlink(pathFile);
            }
            gambar = req.file.filename;
        }

        const hashing = await bcrypt.hash(password, 10);
        const simpan = await user.update({
            username,
            email,
            password: hashing,
            profil: gambar
        }, {
            where: {
                id: userId
            }
        });

        res.status(200).json({
            message: "Data User Berhasil di Update",
            data: simpan
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};
const getById = async (req,res) =>{
    try{
        const data = await user.findOne({
            where : {
                id : req.params.id
            }
        })
        res.status(200).json({
            message : "Data Berhasil di Ambil",
            data : data
        })

    }catch(error){
        res.status(400).json({
            message : error.message
        })

    }
}

export {getData,createData,updateData,getById,validasiUser}