// import http from ('http')
// //membuat server HTTP 
// const server = http.createServer((req,res)=>{
//     if(req.method === 'POST' && req.url === '/data'){
//         let body = 'Server ini bejalan dengan baik ';

//         //Menggunakan data yang dikirimkan oleh client 
//         req.on('data',chunk =>{
//             body+= chunk; 
//         });

//         //Setelan data diterima, proses dan kirimkan respons
//         req.on('end', () =>{
//             //Mengirimkan respons dengan data yang diterima 
//         res.writeHead(200,{'Content-Type': 'aplication/json'});
//         res.end(JSON.stringify({
//             status: 'ok',
//             received_message: body
//         }));    
//         }) ;
//     }else{
//         //Jika endpoint atau metode request tidak sesuai,kirimkan status 404
//         res.writeHead(404,{'Content-Type':'text/plain'});
//         res.end('Not Found')
//     }
// });
// //Menjalankan server di port 3000
// server.listen(5000,()=>{
//     console.log('server berjalan di http://localhost:5000');
    
// })
import http from 'http';

// Membuat server HTTP
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/data') {
        let body = '';

        // Menggunakan data yang dikirimkan oleh client 
        req.on('data', chunk => {
            body += chunk; 
        });

        // Setelah data diterima, proses dan kirimkan respons
        req.on('end', () => {
            // Mengirimkan respons dengan data yang diterima
            res.writeHead(200, { 'Content-Type': 'application/json' });  // Perbaiki typo 'aplication' jadi 'application'
            res.end(JSON.stringify({
                status: 'ok',
                received_message: body
            }));
        });
    } else {
        // Jika endpoint atau metode request tidak sesuai, kirimkan status 404
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Menjalankan server di port 5000
server.listen(5000, () => {
    console.log('Server berjalan di http://localhost:5000');
});

