
// import http from "http"

// const server =  http.createServer((req,res)=>{
//     // console.log(req);

//     //kalu ada clinet yang mengakses endpoint /api/dat
//     //maka akan diberikan sata JSON nya
//     //selain itu akan di berikan pesan error 
//     if(req.url === "api/data" && req.method === "GET"){
//         //sediakan data objek sting js
//         const  data = {
//             name : "dani", 
//             usia : 18 , 
//             alamat : "lampung"}

//          else{
//         res.writeHead(200, {"Content-Type": "aplication/json"});
//         res.end(JSON.stringify({error: "not found"}));
//          }   
//         res.writeHead(200,{"Content-Type":'application/json'})
//         res.end(JSON.stringify({data : "Hellow world"}))
//     }
    

// })

// server.listen(5000,()=>{
//     console.log("server dijalankan");
    
// })