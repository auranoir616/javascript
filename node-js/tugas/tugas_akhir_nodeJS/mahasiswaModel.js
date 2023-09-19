const mongoose = require('mongoose')
schema = mongoose.Schema
const { Schema } = require("mongoose")

const mahasiswa_schema = new Schema({
    nim: {
        type : String,
        required: true,
        index: {unique: true},
    },
    nama: {
        type: String,
        required: true,
    },
    jurusan: {
        type: String,
    },
    semester: {
        type: String,
    },
    joined:{
        type: Date,
        default: Date.now(),
    },
})
module.exports = mongoose.model("newmahasiswa", mahasiswa_schema)