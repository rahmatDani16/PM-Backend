import http from "https";

// simulasi server public
// pakai API public
const url = "https://jsonplaceholder.typicode.com/users";

const request = http.request(url, (res) => {
  // ambil data nya
  // res.on = digunakan untuk mendapatkan data
  // res.end = untuk menutup request
  // res.error = untuk menangkap error jika koneksi terputus
  // res.write = untuk menulis data (biasa nya ini di gunakan untuk method POST)

  // ambil data res nya dengan res.on('data')
  res.on("data", (tangkapData) => {
    console.log(tangkapData);

    let hasil = "";
    // harus di parsing memakai .toString() agar data nya menjadi string bukan Buffer
    hasil += tangkapData;
    console.log("data", hasil.toString());

    // tampil di browser bisa menggunakan react
    // axios
  });

  res.on("error", (err) => {
    console.error(error.mesage);
  });

  res.on("end", () => {
    console.log("Permintaan");
  });
});

//tutup request
request.end();
