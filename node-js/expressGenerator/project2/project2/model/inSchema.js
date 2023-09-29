const mongoose = require('mongoose')

const stockInSchema = new mongoose.Schema({
    kode: {
        type: String,
        trim: true
    },
    nama: {
        type: String
    },
    total_in:{
        type: Number
    },
    date_in:{
        type: Date
    },
    no_invoice:{
        type: String,
        trim: true
    },
    harga_satuan:{
        type: Number
    }
})

module.exports = mongoose.model('stockIn',stockInSchema) 
