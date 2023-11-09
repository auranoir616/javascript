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
// const mongoose = require('mongoose');

// const BuySchema = new mongoose.Schema({
//   items: {
//     type: Object,
//     required: true,
//   },
// });

// module.exports = mongoose.model('Buy', BuySchema);
