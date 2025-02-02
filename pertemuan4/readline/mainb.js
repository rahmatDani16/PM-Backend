import { pertanyaan } from "./reader.js";


//Mengggunakan fungsi pertanyaaan untuk mendapatkan input dari pertanyaaan

pertanyaan("Apa yang kamu mau ? ")
    .then((nama)=>{
        console.log((`Hallo, ${nama}`))
    })
    .catch((error)=>{
        console.log("Terjadi kesalahan: ",error);
        
    })