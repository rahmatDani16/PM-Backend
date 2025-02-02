// export const barang = (name) => {
//     return `Nama barang,${name}`;
//   };
  
//   export const nama = "Televisi";
//   export const type = "Elektronik";
//   export const price = 1000000;

//   export const tampil = () => {
//     console.log(`Nama Barang : ${nama} 
//     Type : ${type}
//      Harga : ${price}`);
//   };
  
//   class Elektronik {
//     constructor(name,type,price){
//         this.name = name;
//         this.type = type;
//         this.price = price
//     }
  
//     tampil() {
//       console.log(`Nama Barang : ${this.name} 
//         Type : ${this.type}
//          Harga : ${this.price}`);
//     }
//     cetak(){
//         console.log(`Nama Barang : ${this.name} 
//         Type : ${this.type}
//          Harga : ${this.price}`);
//     }
//   }
  
//   export const name = new Elektronik("Televisi","Elektronik",1000000 );
 
  
//   export default barang;

class Bangunan {
    constructor(name){
        this.name = name
    }
    hitung(param){
        if(this.name == "persegi"){
            console.log("Luas lingkaran : " + 3.14 * param * param);
        }else if(this.name == "lingkaran"){
            console.log("Luas lingkaran : " + param * param);
        }
    }
}

const persegi = new Bangunan("persegi");
const lingkaran = new Bangunan("lingkaran");

export {persegi,lingkaran}