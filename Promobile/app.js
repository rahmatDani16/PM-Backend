const express = require('express');
const path = require('path');
const cors = require('cors');

const routerdrinks = require('./app/api/v1/drinks/router.js');
const routerCarts = require("./app/api/v1/carts/router.js")

const app = express();
app.use(cors());
const pathApi = '/api/v1';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'app/public/uploads')));

app.use(pathApi, routerdrinks);
app.use(pathApi,routerCarts)

app.listen(3100, () => {
    console.log("server jalan dengan penuh kesuksesan huuuu......");
});