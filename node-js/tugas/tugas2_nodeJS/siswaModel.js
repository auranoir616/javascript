const mongoose = require('mongoose')
const siswaSchema = mongoose.Schema({
    nama:{
        type: String,
        required: true,
    },
    tanggalLahir: String,
    JenisKelamin: String,
    Hobi: String,
})
const dataSiswa = mongoose.model("siswa",siswaSchema)
module.exports = dataSiswa

// module.exports.getdataSiswa = function(callback, limit){
//     dataSiswa.find(callback).limit(limit)
// }