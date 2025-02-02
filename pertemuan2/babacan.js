const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let namaMenu = [];
let hargaMenu = [];

console.log(`
    --=( Warung BABA CHAN )=--

Daftar Menu :
- (NG) Nasi Goreng - 15000
- (AG) Ayam Geprek - 10000
- (AB) Ayam Bakar - 12000
- (ET) Es Teh Manis - 5000
- (EJ) Es Jeruk - 8000
`);

function mainMenu() {
  rl.question(`Opsi :  
1. Pesan
2. Daftar Pesanan
3. Keluar
Pilih (1/2/3) : `,(opsi) => {
    if (opsi === "1") {
      pesanMakanan();
    } else if (opsi === "2") {
      tampilData();
      mainMenu();
    } else if (opsi === "3") {
      console.log("\nTerima kasih telah berkunjung ke warung kami ..");
      rl.close();
    } else {
      console.log("Kode yang dimasukan salah");
      mainMenu();
    }
  });
}

function pesanMakanan() {
  rl.question("Masukkan kode makanan : ", (menu) => {

    if (menu === "NG") {
      namaMenu.push(" Nasi Goreng")
      hargaMenu.push(15000)
      console.log("Pesanan berhasil ditambahkan\n");
      
    } else if (menu === "AG") {
      namaMenu.push("Ayam Geprek")
      hargaMenu.push(10000)
      console.log("Pesanan berhasil ditambahkan\n");
    } else if (menu === "AB") {
     namaMenu.push(" Ayam Bakar")
      hargaMenu.push(12000)
      console.log("Pesanan berhasil ditambahkan\n");
      
    } else if (menu === "ET") {
     namaMenu.push(" Es Teh Manis")
      hargaMenu.push(5000)
      console.log("Pesanan berhasil ditambahkan\n");
      
    } else if (menu === "EJ") {
      namaMenu.push(" Es Jeruk")
      hargaMenu.push(8000)
      console.log("Pesanana berhasil di tambahkan");
      
    } else {
      console.log("Kode makanan salah ");
    }
    mainMenu();
  });
}

function tampilData() {
  if (namaMenu.length === 0) {
    console.log("Anda belum memesan apapun\n ");
  } else {
    let total = 0;
    for (let i = 0; i < namaMenu.length; i++) {
      console.log(`${i + 1}.${namaMenu[i]}: Rp${hargaMenu[i]}`);
      total += hargaMenu[i]; 
    }
    console.log('');
    console.log(`Total Pembayaran: Rp${total}`);
  }
}
mainMenu();
