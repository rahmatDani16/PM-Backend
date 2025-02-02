import http from "http"

//port 300 itu tidak ada yang punya dan umum di gunkan untuk proses development
const PORT = 4000
const server = http.createServer((req,res)=>{
    //tetekuan tipe header ( data yang mau dikirim) 
    // //pakai writeHead(HTTP_RESPON_CODE,{tipe datanya apa})
    //============================================
    // res.writeHead(200,{"Content-Type":'application/json'})
    // //lalu tampilkan data nya hentikan requesnya
    // //JSON stringfy digunakan untuk mengubah objek js menjadi string json
    // res.end(JSON.stringify({
    //     data: "Hellow world"
    // }))
    //============================================
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end("Ini dari server Node.js")
//ini kalu html
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.end("<h1>Ini dari server Node.js</h1>")
    //============================================

    //res.end = digunkan untuk mengakhiri permintaan 
//res.end = digunkan untul menulis atau mengirim data 

//jadi for,at penulisan nya kaya gini 
//1. res.writeHead
//2. res.write
//3. res.end

    //res.write = digunakan untul menuliskan atau mengorom data 

})

//jalankan servernya 
//versi1
// server.listen(3000)

//versi2
server.listen(PORT,()=>{
    console.log(`Server dijalankan pada port ${PORT}`);
})