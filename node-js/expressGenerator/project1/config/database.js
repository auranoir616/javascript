//!setup connection mongoodb

//!import mongoose dan url mongodb
const mongoose = require('mongoose')
// const mongodb = 'mongodb+srv://project1:Dunkelheit1349@project1.0coflbg.mongodb.net/?retryWrites=true&w=majority'
const mongodb = 'mongodb://127.0.0.1:27017/project1'

//!membuat koneksi ke database dengan opsi useNewUrlParser
mongoose.connect(mongodb,{
    useNewUrlParser:true
})
//!respon yang akan ditampilkan di terminal
.then(()=> console.log("mongodb connected"))

//?mengatur jenis promise yang digunakan dalam project ini
mongoose.Promise = global.Promise

//!export module mongoose
module.exports = mongoose