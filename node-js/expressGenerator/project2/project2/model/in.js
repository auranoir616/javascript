const mongoose = require('mongoose')

const stockInSchema = new mongoose.Schema({
    kode: {
        type:String,
        required: true,
        trim: true
    },
    nama: {
        type: String,
        required: true
    },
    total_in:{
        type: Number,
        required: true
    },
    date_in:{
        type: Date,
        required:true
    },
    no_invoice:{
        type: String,
        trim: true
    },
    keterangan:{
        type: String
    }
})

module.exports = mongoose.model('stockIn',stockInSchema) 
