const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        trim: true
    },
    released_on: {
        tipe: Date,
        required: true,
        trim:true
    }
})

module.exports = mongoose.model("movie", movieSchema)