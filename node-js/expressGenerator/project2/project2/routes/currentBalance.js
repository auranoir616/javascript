var express = require("express");
var router = express.Router();
var stockIn = require("../model/inSchema");
var stockOut = require("../model/outListSchema");
const { cekuser } = require("../config/auth");

router.get("/", cekuser, function (req, res, next) {
  const combinedData = []; //menggabungkan semua dataOut 

  stockOut.find({}).then((dataOut) => {
    if (dataOut.length > 0) {
      for (x = 0; x < dataOut.length; x++) {
        const items = dataOut[x].items;
        for (let data of items) {
          combinedData.push({
            nama: data.nama_barang,
            jumlah_out: data.jumlah,
          });
        }
      }
    }
  });
  const namaBarang = []; //menggabungkan semua dataIn
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
      res.render("dashboard", { combinedData, namaBarang });
      console.log(combinedData);
      console.log(
        combinedData.filter((data) => {
          return data.nama === "Laptop";
        })
      );
      console.log(namaBarang);
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});
module.exports = router;
