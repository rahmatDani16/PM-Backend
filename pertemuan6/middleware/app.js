import express from "express";

const app = express();

const PORT = 3000
// App level middlaware
app.use(express.json());
//Jalankan server 
app.get("/",(req,res)=>{
    res.json({
        message: "ini jalur Utama"
    })
})
let user = [
    {id : 1, nama : "dani", age: 18},
    {id : 2, nama : "apet",age: 20},
    {id : 3, nama : "bagus",age: 19}
]
//Membuat fungsi middleware
//Untuk memerikas parameter yang di ur; harus beberapa angka

const cekParam = (req,res,next)=>{
    const cekId = req.params.id;
    if(isNaN(cekId)){
        res.status(404).json({
            message: "Inputan tidak sesuai"
        })
    }else{
        next()
    }

}
//memebuat validasu kalau imputan user == kososng 
//atau imputan user == number
 const validasi = (req,res,next)=>{
    const { nama, usia } = req.body
    if(!nama || typeof (nama) !== "string"){
        res.status(404).json({
            message: "Nama haus di isi/berupa string"
        })
    }else if (!usia || typeof(usia) !== "number"){
        res.status(404).json({
            message: "Usia haru di isi/berupa number"
        })
    }
    next()
    // const checId = parseInt(req.params.id)    
    // if(isNaN(checId)){
    //     res.status(404).json({
    //         message: "Inputan tidak sesuai Mas"
    //     })
    // }else{
    //     //next ino digunkan untuk mengambil respose dari res.json 
    //     //yang ada di rute/jalur app.get("user/:id")
    //     next()
    // }
}

///Simulasi buat jalur POST 
//Menerima kiriman data dari client
//Route level middleware
app.post("/user",validasi,(req,res)=>{
    //buat desctucturing dari imputan user 
    const {name,usia} = req.body
    res.json({
        status: 200,
        message: "OK",
        data: {
            nama,
            usia
        }
    })
})
const cekuser = (req,res,next) =>{
    const cekParam = req.params.id;
    if(username , "admin" && password , "admin"){
        next()
    }else{
        res.status(404).json({
            message: "username/password salah"
        })
    }
}

app.get("/user/:id",(req,res)=>{
    const id = req.params.id 
    //bust check data 
    //console.log(typof(id));
    const datauser = user.find((element)=> element.id == id )
    //buat check data 
    //console.log(typeof (default.id))
    if(datauser){
        res.json({
            status: 200,
            message: "succes",
            data: datauser
        }
            
        )
    }
})
app.get("/user",(req,res)=>{
    res.json({
        status: 200,
        message: "Succesfuly",
        data: user 

    })
})
app.listen(PORT , ()=>{
    console.log("server is running...");
    
})