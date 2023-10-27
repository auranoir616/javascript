//! membuat koneksi ke database
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/PaystackAPI',{
    useNewUrlParser:true
})
module.exports = {mongoose}