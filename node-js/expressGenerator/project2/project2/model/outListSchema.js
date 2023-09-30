const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    
    nama: {
    type: String,
    required: true,
    },
    jumlah:{
        type: Number,
        required: true,
    },
    harga_satuan:{
    type: Number,
    required: true,
},
})
const listSchema = new mongoose.Schema({
    items: [itemSchema],

    total_belanja:{
        type: Number,
    },
    tanggal: {
        type: Date,
        default: Date.now,
    }
})
const itemList = mongoose.model('itemList', listSchema)
module.exports = itemList