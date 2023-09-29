var express = require("express")
var router = express.Router()
var stockIn = require('../model/inSchema')
const {cekuser} =require('../config/auth')


router.get('/',cekuser, function (req, res, next) {
    res.render('dataStock/dataOut',{title: "halaman output"})
})
let namabarang = []
router.get('/find',cekuser, async function(req, res, next){
    try{const kodebarang = await req.query.kode
      
        stockIn.findOne({
            kode: kodebarang
        })
        .then((data)=>{
    
            if(!data){
                console.log("data tidak ditemukan")
                console.log(namabarang)
            }else{
                namabarang.push({
                    nama: data.nama,
                    harga_satuan:data.harga_satuan
                })
                console.log(namabarang)
                // res.redirect('/dataOutput',{namabarang});
                res.redirect(`/dataOutput?namabarang=${encodeURIComponent(JSON.stringify(namabarang))}`);

            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send("Terjadi kesalahan dalam pencarian data.");
          });
        }
        catch(err){
            console.log(err)
        }
    
})
router.get('/hasil',cekuser, function (req, res, next) {
    res.render('tabel', { title: "halaman output", namabarang: namabarang }); // Pass namabarang sebagai data})
})
// Ubah rute pertama menjadi /dataOutputFind atau yang sesuai
// router.get('/dataOutputFind', cekuser, async function(req, res, next) {
//     try {
//         const kodebarang = await req.query.kode;
      
//         stockIn.findOne({
//             kode: kodebarang
//         })
//         .then((data) => {
//             if (!data) {
//                 console.log("data tidak ditemukan");
//                 console.log(namabarang);
//             } else {
//                 namabarang.push({
//                     nama: data.nama,
//                     harga_satuan: data.harga_satuan
//                 });
//                 console.log(namabarang);
//                 res.redirect('/dataOutput');
//             }
//         })
//         .catch((err) => {
//             console.error(err);
//             res.status(500).send("Terjadi kesalahan dalam pencarian data.");
//         });
//     } catch (err) {
//         console.log(err);
//     }
// });


module.exports = router