const userdb = require('./mahasiswaModel.js')

exports.create = (req, res)=>{
    if(!req.body){
        res.status(400).send({message: "data tidak boleh kosong"})
        return
    }
    const newmahasiswa = new userdb({
        nim:req.body.nim,
        nama:req.body.nama,
        jurusan:req.body.jurusan,
        semester:req.body.semester,
    })
    newmahasiswa.save()
    .then((data)=>{
        res.status(201).json({
            message:"data mahasiswa sukses dibuat",
            Data: data,
        })
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message || "internal error",
        })
    })
}

exports.find = (req, res)=>{
    if(req.params._id){
        const datamahasiswa = req.params._id
        userdb.findOne({
            _id: datamahasiswa,
        })
        .then((data)=>{
            if(!data){
                res.status(404)
                .send({message: "tidak bisa menemukan data mahasiswa " + datamahasiswa})
            }else{
                res.json({
                    message: "berhasil menemukan data mahasiswa",
                    Data: data,
                })
            }
        })
        .catch((err)=>{
            res.status(500).send({
                message: err.message || "internal error",
            })
        })
    }else{
        userdb.find()
        .then((data)=>{
            res.json({
                message: "sukses menemukan data user",
                Data: data,
            })
        })
        .catch((err)=>{
            res.status(500).send({
                message: err.message || "internal error"
            })
        })
    }
}

// exports.update = (req, res) =>{
//     try{
//         userdb.findOneAndUpdate({"_id" : req.params._id},req.body,{new : true})
//         .then(data=>{
//             if(!data){
//                 res.status(404).send({
//                     message:"tidak bisa update data dengan id " + req.params._id
//                 })
//             }else{
//                 res.json({
//                     message: "sukses update data mahasiswa",
//                     Data: data,
//                 })
//             }
//         })
//     }catch(err){
//         res.status(500).send({
//             message: err.message || "internal error"
//         })
//     }
// }
exports.update = async function (req, res) {
    try {
        const datamahasiswabaru = await userdb.findById(req.params.datamahasiswa_id);
        if (!datamahasiswabaru) {
            return res.status(404).json({
                status: "error",
                message: "Data mahasiswa tidak ditemukan",
            });
        }
    
        datamahasiswabaru.nim = req.body.nim || datamahasiswabaru.nim;
        datamahasiswabaru.nama = req.body.nama || datamahasiswabaru.nama;
        datamahasiswabaru.jurusan = req.body.jurusan || datamahasiswabaru.jurusan;
        datamahasiswabaru.semester = req.body.semester || datamahasiswabaru.semester;
        
        const datamahasiswabaru1 = await datamahasiswabaru.save();

        res.json({
            status: "success",
            message: "data berhasil di Updated",
            userdb: datamahasiswabaru1,
        });
    } catch (err) {
        res.status(500).json({
            status: "error 1",
            message: err.message || "Internal error",
        });
    }
};


exports.delete = (req, res) =>{
    const datamahasiswa = req.params.datamahasiswa_id
    userdb.findOneAndDelete({_id : datamahasiswa})
    .then((data)=>{
        if(!data){
            res.status(404).send({
                message: "tidak bisa menghapus data " + datamahasiswa
            })
        }else{
            res.json({
                message : "sukses menghapus data"
            })
        }
    })
}

exports.view =async function(req, res){
    try{
        const datamahasiswa = await userdb.findById(req.params.datamahasiswa_id)
        if (!datamahasiswa) {
            return res.json({
                status: "error2",
                message: "data mahasiswa tidak ditemukan",
            });
        }
        res.json({
            message: 'data ditemukan',
            Data: datamahasiswa,
        });
    } catch (err) {
        res.status(500).json({
            status: "error1",
            message: err.message || "Internal error",
        });
    }
    
}