// const express = require('express')
// const apirouter = require('./apirouters')
// const bodyParser = require('express')
// const mongoose = require('mongoose')
// const app = express()
// const port = 8080
// const controller = require('./contactController')


// app.get("/", (req, res)=>{
//     res.send(
//         "web server berhasil dibuat dengan nodemon"
//     )
// })
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
// app.use(bodyParser.json())

// app.use("/api",apirouter)




// //membuat cek koneksi ke database
// mongoose.connect('mongodb://127.0.0.1:27017/restAPI',{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// })
// const db = mongoose.connection
// // Tambahkan ini untuk menangani kesalahan koneksi
// db.on('error', console.error.bind(console, 'Koneksi database gagal:')); 
// db.once('open', function () {
//     console.log('Koneksi database berhasil');
// });

// app.listen(port, ()=>{
//     console.log(`server berjalan di port ${port}`)
// })

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8080;
const apirouter = require('./apirouters');

app.get("/", (req, res) => {
    res.send(
        "web server berhasil dibuat dengan nodemon"
    );
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apirouter);

// Membuat cek koneksi ke database
mongoose.connect('mongodb://127.0.0.1:27017/restAPI', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Koneksi database gagal:'));
db.once('open', function () {
    console.log('Koneksi database berhasil');
});

app.listen(port, () => {
    console.log(`server berjalan di port ${port}`);
});
