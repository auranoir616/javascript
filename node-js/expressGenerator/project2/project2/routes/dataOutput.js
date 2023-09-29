var express = require("express")
var router = express.Router()
var stockIn = require('../model/inSchema')
const {cekuser} =require('../config/auth')


router.get('/',cekuser, function (req, res, next) {
    res.render('dataStock/dataOut',{title: "halaman output"})
})
let kodearray =[]

router.get('/:find',cekuser, function(req, res, next){
    const kodebarang = req.query.kode

    kodearray.push(kodebarang)
    let namabarang = []
//?coba
//!menambahkan setiap kode dalam tabel dan menngakses harganya
    // stockIn.find({
    //     kode:{$in: kodearray}
    // })
    stockIn.findOne({
        kode: kodebarang
    })
    .then((data)=>{

        if(!data){
            console.log("data tidak ditemukan")
            console.log(kodearray)
        }else{
            namabarang.push({
                nama: data.nama,
                harga_satuan:data.harga_satuan
            })
            console.log(kodearray)
            res.render('dataStock/dataOut',{namabarang})
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("Terjadi kesalahan dalam pencarian data.");
      });
})


module.exports = router