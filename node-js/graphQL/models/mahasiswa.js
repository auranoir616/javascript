const mongoose =require("mongoose")
const Schema = mongoose.Schema

const mahasiswaSchema = new Schema({
    nama : String,
    umur : Number,
    jurusanId : String 
})

module.exports = mongoose.model("Mahasiswa", mahasiswaSchema)