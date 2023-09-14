const dataSiswa = require('./siswaModel')

exports.index =async function (req, res){
    try{
        const siswa = await dataSiswa.find({});
        res.json({
            status: "sukses",
            message: "data siswa berhasil diterima",
            data: siswa,
        })
    }catch(err){
        res.status(500).json({
            status: "error",
            message:err.message,
        })
    }
}

exports.new = function(req, res){
    let newsiswa = new dataSiswa()
    newsiswa.nama = req.body.nama
    newsiswa.tanggalLahir = req.body.tanggalLahir
    newsiswa.jenisKelamin = req.body.jenisKelamin
    newsiswa.Hobi = req.body.Hobi
    newsiswa.save()
    .then((data)=>{
        res.json({
            status: "sukses",
            message: " data siswa baru dibuat",
            dataSiswa: data,
        })
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message || "error"
        })
    })
}