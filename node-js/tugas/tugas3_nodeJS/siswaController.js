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
exports.update = async function(req, res){
    try{
    const datasiswa = await dataSiswa.findById(req.params.siswa_id)
    datasiswa.nama = req.body.nama || datasiswa.nama
    datasiswa.tanggalLahir = req.body.tanggalLahir || datasiswa.tanggalLahir 
    datasiswa.jenisKelamin = req.body.jenisKelamin || datasiswa.jenisKelamin
    datasiswa.Hobi = req.body.Hobi || datasiswa.Hobi

    const updateSiswa = await datasiswa.save()
    res.json({
        status: "success",
        message: "data siswa berhasil di update",
        siswa: updateSiswa 
    })
    }catch(err){
        res.status(500).json({
            status: "ERROR",
            message: err.message  
        })
    }
}