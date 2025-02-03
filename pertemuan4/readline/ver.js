import readline from 'readline';
import http from 'http';

// Membuat antarmuka readline untuk input dari pengguna
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk memvalidasi nama
function validateName(name) {
  if (!name.trim()) {
    return 'Nama tidak boleh kosong!';
  }
  return null;  // Valid
}

// Fungsi untuk memvalidasi umur
function validateAge(ageInput) {
  const age = parseInt(ageInput, 10);
  if (isNaN(age)) {
    return 'Umur harus berupa angka!';
  }
  if (age < 18) {
    return 'Umur harus lebih dari atau sama dengan 18 tahun!';
  }
  return null;  // Valid
}

// Fungsi untuk memvalidasi email
function validateEmail(email) {
  if (!emailPattern.test(email)) {
    return 'Email tidak valid!';
  }
  return null;  // Valid
}

// Fungsi untuk meminta input nama
function askName() {
  rl.question('Masukkan nama lengkap Anda: ', (name) => {
    const errorMessage = validateName(name);
    if (errorMessage) {
      console.log(errorMessage);
      askName();
    } else {
      askAge(name);
    }
  });
}

// Fungsi untuk meminta input umur
function askAge(name) {
  rl.question('Masukkan umur Anda: ', (ageInput) => {
    const errorMessage = validateAge(ageInput);
    if (errorMessage) {
      console.log(errorMessage);
      askAge(name);
    } else {
      askEmail(name, ageInput);
    }
  });
}

// Fungsi untuk meminta input email
function askEmail(name, age) {
  rl.question('Masukkan email Anda: ', (email) => {
    const errorMessage = validateEmail(email);
    if (errorMessage) {
      console.log(errorMessage);
      askEmail(name, age);
    } else {
      sendDataToServer(name, age, email);
    }
  });
}

// Fungsi untuk mengirim data ke server
function sendDataToServer(name, age, email) {
  const postData = JSON.stringify({ name, age, email });

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/register',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(postData),
    },
  };

  const req = http.request(options, (res) => {
    let data = '';

    res.on('data', chunk => {
      data += chunk;
    });

    res.on('end', () => {
      const response = JSON.parse(data);
      console.log(response.message);
      console.log('Data Pengguna:', response.user);
      rl.close();
    });
  });

  req.on('error', (error) => {
    console.error('Terjadi kesalahan:', error);
    rl.close();
  });

  req.write(postData);
  req.end();
}

// Memulai aplikasi pendaftaran
askName();
