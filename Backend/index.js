const express = require('express');
const app = express();
const path = require('path')
const connection = require('./connection.js');
const home = require('./routes/home.js');
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set("views",path.resolve("./views"));


app.use('/home', home);

connection("mongodb://localhost:27017/URLSHORTNERDB");

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
