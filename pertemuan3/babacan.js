//inilisaisi module readline nya 
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
// buat variabel arry kosong untuk menampung data pemesanan dan daftar harga
let daftarMenu = [];
let daftarHarga = [];
//buat fungsi untuk menampilkan dafta menu makanan 
const tampilMenu = () =>{
    console.log(`
         --=( Warung BABA CHAN )=--

Daftar Menu :
- NG Nasi Goreng - 15000
- AG Ayam Geprek - 10000
- AB Ayam Bakar - 12000
- ET Es Teh Manis - 5000
- EJ Es Jeruk - 8000
`);
}
//bikin fungsi untuk menapilkan pilihan didalam aplikasinya 
const pilhAksi = () =>{
    console.log(`
Opsi :  
1. Pesan
2. Daftar Pesanan
3. Keluar
Pilih (1/2/3) :
        `);
 rl.question("Opsi 1/2/3 :",(opsi) =>{
    //buat kondisi kalau imputan user 1/2/3
    switch (opsi) {
        case "1":
            pesanMakanan();
            break;
        case "2":
            tampilData();
            pilhAksi();
            break;
        case "3":
            console.log("\nTerima kasih telah berkunjung ke warung kami ..");
            rl.close();
            break;
        default:
            console.log("Kode yang dimasukan salah");
            pilhAksi();
            break;
    }
        
 })
}

const pesanan = () =>{
    // console.log("ini fungsi pesan");
    rl.question("Masukan kode makanan : ",(kode) =>{
        if(kode.toLocaleLowerCase() === "ng" || kode.toUpperCase() === "NG"){
            daftarPesan.push("Nasi Goreng")
            daftarHarga.push(15000)
            console.log("Pesanan berhasil ditambahkan\n");
            pilhAksi();
        } else if(kode.toLocaleLowerCase() === "ag" || kode.toUpperCase() === "AG"){
            daftarPesan.push("Ayam Geprek")
            daftarHarga.push(10000)
            console.log("Pesanan berhasil ditambahkan\n");
            pilhAksi();
        } else if(kode.toLocaleLowerCase() === "ab" || kode.toUpperCase() === "AB"){
            daftarPesan.push("Ayam Bakar")
            daftarHarga.push(12000)
            console.log("Pesanan berhasil ditambahkan\n");
            pilhAksi();
        } else if(kode.toLocaleLowerCase() === "et" || kode.toUpperCase() === "ET"){
            daftarPesan.push("Es Teh Manis")
            daftarHarga.push(5000)
            console.log("Pesanan berhasil ditambahkan\n");
            pilhAksi();
        } else if(kode.toLocaleLowerCase() === "ej" || kode.toUpperCase() === "EJ"){
            daftarPesan.push("Es Jeruk")
            daftarHarga.push(8000)
            console.log("Pesanana berhasil di tambahkan");
            pilhAksi();
        } else {
            console.log("Kode yang dimasukan salah");
            pilhAksi();
        }
    } )
    
}
const daftaPesanan = () =>{
    // console.log("ini fungsi daftarpesan");
    if(daftarPesan.length === 0){
        console.log("Anda belum memesan apapun");
    } else {
        for(let i = 0; i < daftarPesan.length; i++){
            console.log(`${i+1}. ${daftarPesan[i]} - ${daftarHarga[i]}`);
        }
        let totalBayar = daftarHarga.reduce((totalmem,harga)=>{
            return total + harga
        })
        console.log("Total Pembayaran :" + totalBayar);
        
    }
}

const keluaProgram = () =>{
    console.log("ini fungsi keluar");
}


tampilMenu();
pilhAksi();