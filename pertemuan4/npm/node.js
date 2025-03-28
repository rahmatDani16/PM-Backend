// const readline = require('readline');
// const validator = require('validator');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Fungsi untuk menanyakan  pengguna dan memvalidasinya
// function pengguna (query) {
//   return new Promise((resolve) => rl.question(query, resolve));
// }

// async function User() {
//   console.log("Selamat datang di Aplikasi Pendaftaran peTIK!");

//   // Meminta nama pengguna
//   const name = await pengguna("Masukkan nama lengkap Mahasantri: ");
//   if (name.trim() === "") {
//     console.log("Nama tidak boleh kosong.");
//     rl.close();
//     return;
//   }

//   // Meminta email dan memvalidasinya
//   const email = await pengguna("Masukkan email Anda: ");
//   if (!validator.isEmail(email)) {
//     console.log("Email tidak valid Silahkan coba masukan email yang benar!");
//     rl.close();
//     return;
//   }

//   // Meminta usia dan memvalidasinya
//   const age = await pengguna("Masukkan usia Anda: ");
//   if (!validator.isInt(age, { min:18 ,max: 23 })) {
//     console.log("Usia harus di bawah 23 tahun");
//     rl.close();
//     return;
//   }

//   // Jika semua input valid, tampilkan pesan sukses
//   console.log(`Pendaftaran anda telah berhasil Nama: ${name} Email: ${email} Usia: ${age}`);
//   rl.close();
// }
// User();
// const express = require("express");
import express from "express"
const app = express();
const port = 3000;

// Routing halaman utama (home)
app.get("/", (req, res) => {
  res.send("Selamat datang di halaman utama!");
});

// Routing halaman about
app.get("/about", (req, res) => {
  res.send("Ini adalah halaman About.");
});

// Routing halaman contact
app.get("/contact", (req, res) => {
  res.send("Hubungi kami di email: contact@example.com");
});

// Routing jika halaman tidak ditemukan (404)
app.use((req, res) => {
  res.status(404).send("Halaman tidak ditemukan!");
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
