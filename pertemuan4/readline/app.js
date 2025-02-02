const validator = require('validator');
// const chalk = require('chalk');

function validatorUser(email, phone, age) {
    // Validasi email
    if (!validator.isEmail(email)) {
        console.log('Email tidak valid!');
    } else {
        console.log('Email benar');
    }

    // Validasi nomor telepon
    if (!validator.isMobilePhone(phone,'id-ID',)) {
        console.log('Nomor telepon tidak valid!');
    }  else if (!validator.isMobilePhone(phone,'id-ID',)) {
        console.log('Nomor telepon valid');
    }

    // Validasi umur
    if (!validator.isInt(age.toString(), { min: 0, max: 100 })) {
        console.log('Umur tidak valid!');
    } else {
        console.log('Umur valid');
    }
}

// Panggil fungsi dengan data untuk diuji
validatorUser('rahmatdani@gmail.com', '082269276202', 18);
