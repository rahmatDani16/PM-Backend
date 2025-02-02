import { tanyaApa, closeInterface } from "./pengguna.js";

//FUngsi utama untuk meminta input berurutan 

async function userInfo(){
    try{
        const nama = await tanyaApa("Kamu siapa ? ");
        const umur = await tanyaApa("Umur kamu berapa ?");
        const alamat = await tanyaApa("Alamat kamu di mana ?");


        //Menampilkan hasil input pengguna
        console.log(`Nama: ${nama}`);
        console.log(`Umur: ${umur}`);
        console.log(`Alamat: ${alamat}`);

        //Menutup interface readline setelah selesai 
        closeInterface();
    } catch (error){
        console.log('Terjasi kesalahan ');
        
    }
}

//Memanggil fungsu utama

userInfo();