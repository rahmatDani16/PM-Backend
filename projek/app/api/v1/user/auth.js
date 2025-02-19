// import express from "express";
import bcypt from "bcrypt";
import user from "./model.js";

const login = async (req,res) =>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message : "Email dan Password Tidak Boleh Kosong"
            })
        }
        const data = await user.findOne({
            where : {
                email : email
            }
        })
        if(!data){
           return res.status(400).json({
                message : "Email Tidak Ditemukan"
            })

        }
        const compare = await bcypt.compare(password,data.password)
        if(!compare){
            res.status(400).json({  
            message : "Password Salah"
        })
    }
        res.status(200).json({
            message : "Login Berhasil"
        })
    }catch(error){
        res.status(400).json({
            message : error.message
        })
    }

}
const register = async (req,res) =>{    
    try{
        const {email,password,username} = req.body;
        if(!email || !password || !username){
            return res.status(400).json({
                message : "Email, Password dan Username Tidak Boleh Kosong"
            })
        }
        const data = await user.findOne({
            where : {
                email : email
            }
        })
        if(data){
            throw new Error("Email Sudah Terdaftar")
        }
        const hashing = await bcypt.hash(password,10)
        const simpan = await user.create({
            email,
            password : hashing,
            username
        })
        if(!simpan){
         return res.status(400).json({
              message : "Register Gagal"
          })
        }

        res.status(200).json({
            message : "Register Berhasil"
        })
    }catch(error){
      return  res.status(400).json({
            message : error.message
        })
    }
}
export {login,register}