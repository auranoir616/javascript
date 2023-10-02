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
    let infoOut  = []

    stockIn
      .findOne({
        kode: kodebarang,
      })
      .then((data) => {
        if (!data) {
          console.log("data tidak ditemukan");
          infoOut.push({msg: "lengkapi input data"})
          console.log(infoOut);
          res.redirect("/dataOutput");
          // res.render("dataStock/dataOut", { infoOut });


        } else {
          namabarang.push({
            nama: data.nama,
            harga_satuan: data.harga_satuan,
          });
          console.log(namabarang);
          res.redirect("/dataOutput");
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

//!menambahkan route reset untuk mereset array
router.get('/reset', cekuser, function(req, res, next){
    namabarang=[]
    res.redirect('/dataOutput')
})

//!menambahkan route untuk post output 
router.post('/inputOut', cekuser, function(req, res, next){
  const { nama_barang, jumlah, harga_satuan, harga, total } = req.body;
  let infoOut  = []

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
  if(!dataItem.items || dataItem.items.length<1){
    infoOut.push({msg: "data kosong"})
  }
if(infoOut.length > 0){
   res.render("dataStock/dataOut", { infoOut });
  console.log(infoOut)
}
else{
  const newItemsList = new stockOut(dataItem)
  newItemsList
  .save()
  .then((newItemsList)=>{
    console.log(newItemsList)
    infoOut.push({msg: "data berhasil disimpan"})
    res.render("dataStock/dataOut", { infoOut });

    console.log(dataItem)
    console.log(infoOut)


  
  })


  .catch((err)=>{
    console.log(err)  


  })
}
});


module.exports = router;
