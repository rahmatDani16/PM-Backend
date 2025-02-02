//Manipulasi Array

// const { log } = require("node:console");

//1.Manambah isi array 
// var arr = [];
// arr[0] = "samsul";
// arr[1] = "maryam";
// arr[2] = "adit";
// console.log(arr);
// ar

//2.Menghapus isi array dengan manual
// var arr =["samsul","maryam","adit"];
// arr[1] = undefined;
// console.log();


//3.Menam[ilkan isi array

// var arr =["samsul","maryam","adit"];

// for(var i = 0; i< 3; i++){
//     console.log('mahasiswa ke- '+ (i+1)+ '+'+arr[i]);
// }


//method pada arry 
// //1.join
// var arr =['samsul','maryam','adit'];
// console.log(arr.join());

//2.push & pop

// arr.push('Bagas');
//pop menghilangkan elemen terakhir
// arr.pop()
// arr.pop()

//3.Unshift & dan shift 

// arr.unshift('Bagas')
// arr.shift()
// console.log(arr.join('-'));

//4.splice 
// splice menmbah index awaal atau terakhir (indexAwal,mauDihapusberpa,Mau di tambah eleemn baru1)
// arr.splice(1, 2,'Dafa','dodi');
// console.log(arr.join());

//5.slice
//slice mau di potong yang mana (awal,akhir)
// var arr =["samsul","maryam","adit","ilyas"];

// var arr2 = arr.splice(1,2);
// console.log(arr2.join());


//6. foreach 
// var angka= [1,2,3,4,5,6,7,8];
// var nama = ['rahmat ','dani','bagas']
// for( var i = 0; i <angka.length; i++){
//     console.log(angka[i]);
// }
// angka.forEach(function(e){
//     console.log(e);
// })
// nama.forEach(function(e,i){
//     console.log('menambahkan mahasiswa' + i + 'adalah :' + e);
    
// })

//7.map mengembalikan nilai pada array 
// var angka = [1,2,3,4,5,6,7];
// var angka2 = angka.map(function(e){
//     return e * 2;
// })
// console.log(angka.join());

//8.sort

// var angka = [1,2,3,4,6,7,5];
// angka.sort();
// console.log(angka.join());

//9.filter

// var angka = [1,2,3,4,6,7,5];
// var angka2 = angka.filter(function(e){
//     return e == 5;
// })
// console.log(angka2);


// let fruits = ['Apel','Banana'];
// fruits.push('nanas');
// console.log(fruits);

// fruits.push('Grapea');
// console.log(fruits);

// let number = [1,2,3];
// number.push(4);

// console.log(number);

// let shopee = [];

// shopee.push('Susu','Madu');
// shopee.push('Telur','Gula','Roti');

// console.log(shopee);
// console.log(`Jumlah barang yang ada : ${shopee.length}`);

//Menyimpan log aktivitas user 

// let activitas = [];

// function tambahActivitas(aktivitasbaru){
//     let waktu = new Date().toLocaleDateString();
//     activitas.push({aktivitasbaru,waktu});
// }

// tambahActivitas('login');
// tambahActivitas('Upload file');
// tambahActivitas('Mengirimkan pesan');

// console.log(activitas);

//Mengelola antrian pelanggan 

// let customer = [] ;

// //Menambah pelanggan ke dalam antrian 
// function tambahCustomer(name){
//     customer.push(name);
//     console.log(`${name} Sedang masuk antrian.`);
// }

// //Memproses pelanggan 

// function prosesCustomer(){
//     if(tambahCustomer.length === 0){
//         console.log('Tidak ada pelanggan dalam antrian');
//         return;
//     }
//     let pelanggan = customer.shift();
//     console.log(`${pelanggan} Sedang di layani.`);
    
// }

// //simulasi
// tambahCustomer('dani');
// tambahCustomer('budi');
// tambahCustomer('anggi');

// console.log(customer);

// prosesCustomer();
// prosesCustomer();

// console.log(tambahCustomer);

// Inisialisasi array untuk daftar pelanggan
let customer = [];

// Fungsi untuk menambahkan pelanggan ke dalam antrian
function tambahCustomer(nama) {
// Push() digunakan untuk menambahkan elemen baru ke dalam array   
    customer.push(nama); 
    console.log(`${nama} telah ditambahkan ke antrian.`);
}

// Fungsi untuk memproses pelanggan dalam antrian
function prosesCustomer() {
//Maksud dari length adlah mengembalikan jumlah elemen dalam array 
    if (customer.length === 0) {
//customer.lenght === 0 jika customer kosong yang artinya tidak ada pelanggan yang ada dalam antrian 
        console.log('Tidak ada pelanggan dalam antrian.');
        return;
    }
    let pelanggan = customer.shift(); 
    console.log(`${pelanggan} sedang dilayani.`);
}
// simulasi untuk menambahkan pelanggan
tambahCustomer('dani');
tambahCustomer('budi');
tambahCustomer('anggi');

// Menampilkan semua pelanggan dalam antrian
console.log('Daftar pelanggan:',customer); 

prosesCustomer(); 
prosesCustomer();


console.log('Daftar pelanggan sudah  diproses:', customer);

