// Core module 
// File system module 

// const { log } = require('console');
const fs = require('fs');

//Menuliskan string ke fiel (synchronous)
// fs.writeFileSync('test.txt','Hallow world secara syncronous');

//mengenuliskan error sendiri 
// try {
//     fs.writeFileSync('test.txt','Hallow world secara syncronous');
// } catch (e){
//     console.log(e);
// }

// Meniliskan string ke file (Asynchronous)
fs.appendFileSync('data/test.txt','Hallow world  Asynchronous',(e)=>{
    console.log(e);
});


//Membaca isi file secara synhronous
// const data =  fs.readFileSync('data/test.txt');
// console.log(data.toString());


//Membaca isi file secara Asynchronous

// fs.readFile('data/test.txt','utf-8',(e,data)=>{
//     if (e) throw e;
//     console.log(data);
    
// })
// Readline 

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Masukan nama anda : ',(nama)=>{
//     rl.question('Masukan umur anda :',(umur)=>{
//         rl.question('Masukan alamat anda : ',(alamat)=>{
//             rl.question('Masukan pekerjaan anda : ',(pekerjaan)=>{
//                 const contact = {
//                     nama,
//                     umur,
//                     alamat,
//                     pekerjaan
//                 };
//                const file = fs.readFileSync('data/contacs.json','utf8');
//                const contacts = JSON.parse(file);

//                contacts.push(contact);

//                fs.writeFileSync('data/contacs.json',JSON.stringify(contacts));

//                console.log('Terimaksih sudah memasukan data .');
               

               
               
//                 rl.close();
//             })
           
//         })
       
//     })
    
// })

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Fungsi untuk meminta dan mencatat informasi siswa
// function daftarSiswa() {
//   rl.question('Nama lengkap: ', (nama) => {
//     rl.question('Usia: ', (usia) => {
//       rl.question('Jurusan yang diinginkan: ', (jurusan) => {
//         // Menampilkan informasi yang diterima dari pengguna
//         console.log(`Pendaftaran Siswa Baru:
//              Nama: ${nama}
//              Usia: ${usia}
//              Jurusan: ${jurusan}`);
    
        
//         // Menutup readline setelah input selesai
//         rl.close();
//       });
//     });
//   });
// }

// // Menjalankan fungsi pendaftaran siswa
// daftarSiswa();


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Siapa nama anda ? ',(nama)=>{
//     rl.question('Berapa umur anda ? ',(umur)=>{
//         rl.question('Gender anda ? [l/p] ',(gennder)=>{
//             let status = umur <= 15 ? 'anak-anak' : 'dewasa';

//               console.log(`Terimaksih kasih : ${nama}usia anda adalah ${status} `);
//                rl.close();
//             })
//         })
//     })


// for (let i = 0; i <= 3; i++) {
//     fs.appendFileSync(`file ${i}.txt Hallo ${i}`);
// }

// const fs = require('fs');

// fs.mkdirSync('Folder', { recursive: true });

// for (let i = 1; i <= 3; i++) {
//     const folder = `Folder/file${i}.txt `;
//     const file = ` Halo${i}`;

  
//     fs.writeFileSync(folder,file);
//     console.log(`folder${i}.txt telah dibuat`);
// }
