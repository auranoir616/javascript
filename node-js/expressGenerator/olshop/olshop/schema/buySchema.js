const mongoose = require('mongoose')
const listProductSchema = new mongoose.Schema({

    product: {
        type: String,
    },
    sum:{
        type: Number,
    },
    harga: {
        type: Number,
    },
    total:{
        type: Number,
    },
})
const BuyListSchema = new mongoose.Schema({
    items: [listProductSchema],
    username:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    total_belanja: {
        type: Number
    }
})

const BuySchema = mongoose.model('Buy', BuyListSchema)
module.exports = BuySchema
