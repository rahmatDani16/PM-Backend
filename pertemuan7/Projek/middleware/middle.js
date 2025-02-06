import express from "express";

const app = express();
const PORT = 3000

app.use(express.json());

const cekParam = (req,res,next)=> {
    const {id} = req.params;
    if(isNaN(id)){
        res.status(401).json({
            message : "Id Tidak sesuai"
        })
    }else{
        next();
    }
    
}

const validasi = (req,res,next)=>{
    const {nama,nim,prodi} = req.body;
    if(!nama || typeof(nama) !== "string"){
        res.status(401).json({
            message : "Nama harus diisi"
        })
    }
     if (!nim || typeof(nim) !== "number"){
        res.status(401).json({
            message : "Nim harus diisi"
        })
    }
    if(!prodi || typeof(prodi) !== "string"){
        res.status(401).json({
            message : "Prodi harus diisi"
        })
    }
    next();
}

app.get("/",(req,res)=>{
res.json({
    message : "Selamat datang di API Mahasantri"
});
});

app.put("/mahasiswa/:id",cekParam,validasi,(req,res)=>{
    res.json({
        message : "Data Mahasantri berhasil di update",
        id : req.params.id,
        data : req.body
    });
});

app.listen(PORT,()=>{
    console.log("Server running of port....");
    
})