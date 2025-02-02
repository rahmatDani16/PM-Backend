// const a = 10 ;

// const tambah = () => {
//     return 1 + 2
// }

// // tinggal di eksport 
// module.exports = { 
//     a, tambah
// }

// ini kalau mau export default
// export default { 
//     a, tambah
// }

// const a = "samsul";

// const grade = function (param1){
//     console.log("sedang belajar Javascript");   
// }

// module.exports = {
//     grade
// }

// const data = [
//     {id : 1, name : "samsul", gender: "l"},
//     {id : 2, name : "maryam", gender: "p"},
//     {id : 3, name : "adit", gender: "l"},
//     {id : 4, name : "siti", gender: "p"},
// ]

// const daftar = () => {                                                                                                                                         
//     return data
// }

// console.log(`Jumlah peserta : ${daftar().length}
//  Laki-laki : ${daftar().filter(x => x.gender == "l").length} 
//  Perempuan : ${daftar().filter(x => x.gender == "p").length}`);



const data = [
    {id:1, name:"samsul", gender:"l"},
    {id:2, name:"maryam", gender:"p"},
    {id:3, name:"adit", gender:"l"},
    {id:4, name:"siti", gender:"p"}
];

const daftar = () => {
    laki=data.filter((item) => {
        return item.gender == "l"
    })
    cewe=data.filter((item) => {
        return item.gender == "p"
    })

       console.log(
        `Jumlah peserta : ${data.length}
    Laki-laki :${laki.length}
    -${data[0].name}
    -${data[2].name}
    perempuan :${cewe.length}
    -${data[1].name}
    -${data[3].name}` 
       );
}
module.exports = {
    daftar
}