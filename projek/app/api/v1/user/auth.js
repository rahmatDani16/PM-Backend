import bcrypt from "bcrypt";
import user from "./model.js"; 

const register = async (req, res) => {
    try {
      const { username, email, password, confirmPassword } = req.body;
   
      if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ 
            message: "semua field harus di isi dengan benar" 
        });
      }
  
      if (password !== confirmPassword) {
        return res.status(400).json({
          message: "Password dan Konfirmasi harus sama",
        });
      }
  
      const hashing = await bcrypt.hash(password, 10);
  
      const simpan = await user.create({
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


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validasi input
        if (!email || !password) {
            return res.status(400).json({
                message: "Email dan Password Tidak Boleh Kosong"
            });
        }

        // Cari user berdasarkan email
        const data = await user.findOne({ where: { email } });

        if (!data) {
            return res.status(404).json({
                message: "Email Tidak Ditemukan / Belum Terdaftar"
            });
        }

        // Pengecekan password dengan bcrypt
        const compare = await bcrypt.compare(password, data.password);
        if (!compare) {
            return res.status(400).json({
                message: "Password Salah / Silahkan coba lagi"
            });
        }

        res.status(200).json({
            message: "Login Berhasil"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Terjadi Kesalahan pada Server"
        });
    }
};

export { login, register };
