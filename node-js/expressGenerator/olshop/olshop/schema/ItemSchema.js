const mongoose = require('mongoose')

const ItemSchema = new mongoose.Schema({

    name: {
        type: String,
    },
    price: {
        type: Number,
        trim: true
    },
    image:{
        type: String,
        trim: true
    },
    desc:{
        Type: String
    },
    total:{
        type: Number,
        require: true
    },
    shop:{
        type: String
    }
})
modeule.exports = mongoose.model('Items', ItemSchema)