var express = require("express");
var router = express.Router();
var stockIn = require("../model/inSchema");
var stockOut = require('../model/outListSchema')
const { cekuser } = require("../config/auth");

router.get("/", cekuser, function (req, res, next) {
  res.render("dataStock/dataOut", {namabarang, info});
});
let info =[]
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
          info[0]={msg: "kode barang salah"}
          console.log(data);
          res.status(404).json({ message: "Data tidak ditemukan" });
          // res.redirect("/dataOutput");
          // res.render("dataStock/dataOut", { info, namabarang });
        } 
        else {
          namabarang.push({
            nama: data.nama,
            harga_satuan: data.harga_satuan,
          });
          console.log(namabarang);
          console.log(data)
          info.shift()
          res.redirect("/dataOutput");
          // res.render("dataStock/dataOut", { info, namabarang });

        }
      })
      .catch((err) => {
        console.error(err);
        // res.status(500).send("Terjadi kesalahan dalam pencarian data.");
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
router.get('/inputout', cekuser,function(req,res, next){
  res.render("dataStock/inputOut", {namabarang, info})
})
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
  // let info =[]
  if(!dataItem.items || dataItem.items.length<1){
    info[0]={msg: "data kosong"}
  }
if(info.length > 0){
  res.render("dataStock/dataOut", {info})  // res.send(info)
  console.log(info)
}
else{
  const newItemsList = new stockOut(dataItem)
  newItemsList
  .save()
  .then((newItemsList)=>{
    res.render("dataStock/dataOut", {info})  // res.send(info)
    console.log(newItemsList)
    info[0] = {msg: "data berhasil disimpan"}    // res.render("dataStock/dataOut", {info});
    console.log(dataItem)
    console.log(info)
  })
  .catch((err)=>{
    res.status(500).send("server error")
    console.log(err)  


  })
}
});


module.exports = router;
