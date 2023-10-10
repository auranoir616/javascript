var express = require("express");
var router = express.Router();
var stockIn = require("../model/inSchema");
var stockOut = require("../model/outListSchema");
const { cekuser } = require("../config/auth");

router.get("/", cekuser, async function (req, res, next) {
  const combinedDataOut = []; //menggabungkan semua dataOut
  const namaBarang = []; //menggabungkan semua dataIn
  let filteredDataout =[]; // hasil filter total out setiap barang

  await stockOut.find({})
  .then((dataOut) => {
    if (dataOut.length > 0) {
      for (x = 0; x < dataOut.length; x++) {
        const items = dataOut[x].items;
        for (let data of items) {
          combinedDataOut.push({
            nama: data.nama_barang,
            jumlah_out: data.jumlah,
          })
        }
      }
      const finalData ={}
      combinedDataOut.forEach( item => {
        if(!finalData[item.nama]){
        finalData[item.nama] =  { nama: item.nama, total_out: 0}
        }
        finalData[item.nama].total_out += item.jumlah_out
      })
      let finalDataArray = Object.values(finalData)
      filteredDataout = finalDataArray
      console.log("final data ",filteredDataout)
    }

  });
  stockIn
    .find({})
    .then((dataIn) => {
      if (dataIn.length > 0) {
        for (let data of dataIn) {
          namaBarang.push({
            nama: data.nama,
            jumlah_In: data.total_in,
          });
        }
      }
      const dataMap = {}
      filteredDataout.forEach((data)=>{
        const {nama, total_out } = data
        if(!dataMap[nama]){
          dataMap[nama] = {nama, total_out, jumlah_In: 0}
        }else{
          dataMap[nama].total_out += total_out
        }
      })
      namaBarang.forEach((data)=>{
        const {nama, jumlah_In } = data
        if(!dataMap[nama]){
          dataMap[nama] = {nama, total_out: 0, jumlah_In}
        }else{
          dataMap[nama].jumlah_In += jumlah_In
        }
      })
      const combinedArray = Object.values(dataMap);
      combinedArray.forEach((data)=>{
        data.balance = data.jumlah_In - data.total_out
      })

      console.log("namabarang ", namaBarang);
      console.log("dataALL ", combinedArray);

      res.render("dashboard", { combinedArray });


    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});
module.exports = router;
