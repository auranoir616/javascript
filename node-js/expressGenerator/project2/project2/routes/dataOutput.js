var express = require("express");
var router = express.Router();
var stockIn = require("../model/inSchema");
var stockOut = require('../model/outListSchema')
const { cekuser } = require("../config/auth");

router.get("/", cekuser, function (req, res, next) {
  res.render("dataStock/dataOut", { namabarang });
});
  
let namabarang = [];
router.get("/find", cekuser, async function (req, res, next) {
  try {
    const kodebarang = await req.query.kode;

    stockIn
      .findOne({
        kode: kodebarang,
      })
      .then((data) => {
        if (!data) {
          console.log("data tidak ditemukan");
          console.log(namabarang);
          res.redirect("/dataOutput");

        } else {
          namabarang.push({
            nama: data.nama,
            harga_satuan: data.harga_satuan,
          });
          console.log(namabarang);
          res.redirect("/dataOutput");
          // res.redirect(`/dataOutput?namabarang=${encodeURIComponent(JSON.stringify(namabarang))}`);
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Terjadi kesalahan dalam pencarian data.");
      });
  } catch (err) {
    console.log(err);
  }
});
router.get("/hasil", cekuser, function (req, res, next) {
  res.render("tabel", { title: "halaman output", namabarang: namabarang }); // Pass namabarang sebagai data})
});

//!menambahkan route reset untuk mereset array
router.get('/reset', cekuser, function(req, res, next){
    namabarang=[]
    res.redirect('/dataOutput')
})

//!menambahkan route untuk post output 
router.post('/inputOut', cekuser, function(req, res, next){
  const { nama_barang, jumlah, harga_satuan, harga, total } = req.body;

  const dataItem ={
    items: [],
    total_belanja: total
  }

  for(let x=0; x <nama_barang.length; x++){
    const item = {
      nama_barang: nama_barang[x],
      jumlah: jumlah[x],
      harga_satuan: harga_satuan[x],
      harga: harga[x]
    }
    dataItem.items.push(item)
  }

  const newItemsList = new stockOut(dataItem)
  newItemsList
  .save()
  .then((newItemsList)=>{
    console.log(newItemsList)
    res.render('dataStock/dataout')
  })
  .catch((err)=>{
    console.log(err)  
      // res.json({ error: 'Data berhasil diterima dan diproses di server.' });


  })
});


module.exports = router;
