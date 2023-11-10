//import module yangdibutuhkan
var moment = require("moment");
var express = require("express");
var router = express.Router();
var Items = require("../schema/ItemSchema");
const Buy = require("../schema/buySchema");

//menampilkan router / dengan merender file itemPost
router.get("/", function (req, res, next) {
  res.render("itemPost", { title: "POST" });
});
//metode post item baru
router.post("/itemPost", function (req, res, next) {
  const { name, price, image, desc, total, shop } = req.body;
  let info = []; //?array untuk menyimpan data info
  if (!name || !price || !image || !desc || !total || !shop) {
    info.push({ msg: "lengkapi data" });
    console.log(info);
  }
  if (info.length > 0) {
    res.render("itemPost", { info });
    console.log(info);
  } else {
    const newItem = Items({
      name: req.body.name,
      price: req.body.price,
      image: req.body.image,
      desc: req.body.desc,
      total: req.body.total,
      shop: req.body.shop,
    });
    newItem
      .save()
      .then((newItems) => {
        console.log(newItems);
        info.push({ msg: "data berhasil diinput" });
        res.render("itemPost", { info });
        console.log(info);
      })
      .catch((err) => {
        console.error(err);
        info.push({ msg: "Terjadi kesalahan saat menambahkan data stock" });
        console.log(info);
      });
  }
});
let fruitsData=[]; //?array untuk menyimpan data tabel/keranjang sementara
let info;
//metode menampilkan data dari database
router.get("/itemGet", function (req, res, next) {
  let ItemsArray = [];
  Items.find({})
    .then((items) => {
      if (items) {
        for (let item of items) {
          ItemsArray.push({
            name: item.name,
            price: item.price,
            image: item.image,
            desc: item.desc,
            total: item.total,
            shop: item.shop,
            id: item.id,
          });
        }
        res.render("itemGet", { ItemsArray, fruitsData, info });
        // console.log(ItemsArray);
      } else {
        res.send("data kosong");
      }
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});
//metode untuk menambahkan data kedalam keranjang/tabel
router.get("/Add/:fruitID", async function (req, res, next) {
  let info1 = [];
  info = info1;
  try {
    //?mencari data menggunakan parameter ID dan mencocokkannya dengan some()
    const fruitName = await Items.findById(req.params.fruitID);
    if (fruitsData.some((data) => data.id === fruitName.id)) {
      info1.push({ msg: "buah sudah ada dalam keranjang" });
      res.redirect("/items/itemGet");
    } else {
      fruitsData.push({
        product: fruitName.name,
        harga: fruitName.price,
        id: fruitName.id,
      });
      info1.push({ msg: "buah berhasil ditambahkan" });
      console.log(fruitsData);
      res.redirect('/items/itemGet');
    }
  } catch (err) {
    console.log(err);
  }
});
router.get("/Keranjang", function (req, res) {
  res.render("keranjang", { fruitsData });
});

//metode untuk delete data dalam keranjang
router.get("/delete/:fruitID", async function (req, res, next) {
  try {
    const fruitId = await req.params.fruitID;
    const deletedfruit = fruitsData.filter((item) => item.id !== fruitId);
    fruitsData = deletedfruit;
    console.log(fruitsData);
    res.redirect("/items/Keranjang");
  } catch (err) {
    console.log(err);
  }
});
//metode untuk melakukan pembelian

router.post("/buy", function (req, res, next) {
  const { product, sum, harga, total, totalBelanja } = req.body;
  const fruitsItem = {
    items: [],
    date: new Date(),
    total_belanja: parseFloat(totalBelanja),
  };
  for (let x = 0; x < product.length; x++) {
    const fruit = {
      product: product[x],
      sum: sum[x],
      harga: harga[x],
      total: total[x],
    };
    fruitsItem.items.push(fruit);
  }
  console.log(fruitsItem.items);
  if (!product || !harga || !sum || !total) {
    res.send("terjadi kesalahan");
    console.log(sum);
  } else {
    const newItems = new Buy(fruitsItem);
    newItems
      .save()
      .then((newItems) => {
        console.log(newItems);
        updateTotalBarang();
        fruitsData = [];
        // res.redirect('/items/CheckOut');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send("Terjadi kesalahan server");
      });
  }
});
//!menyimpan sementara data
let fruitsTempSaveGlobal;
router.post("/CheckOut", function (req, res, next) {
  try {
    const { product, sum, harga, total, totalBelanja } = req.body;
    const newDate = moment().format("DD MMMM YYYY, h:mm:ss a");
    const fruitsTempSave = {
      items: [],
      date: newDate,
      total_belanja: parseFloat(totalBelanja),
    };
    for (let x = 0; x < product.length; x++) {
      const fruit = {
        product: product[x],
        sum: sum[x],
        harga: harga[x],
        total: total[x],
      };
      fruitsTempSave.items.push(fruit);
      fruitsTempSaveGlobal = fruitsTempSave;
    }
    console.log(fruitsTempSave);
    res.redirect(`/items/CheckOut?data=${encodeURIComponent(JSON.stringify(fruitsTempSave))}`);
   } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Erroraasdas" + error.message);
  }
});
router.get("/CheckOut", function (req, res) {
  res.render("CheckOut", { fruitsTempSaveGlobal });
});

//! update stock
async function updateTotalBarang() {
  try {
    //menemukan data dan disotir dari data terbaru dari data Buy
    const latestBelanja = await Buy.findOne().sort({ date: -1 });
    if (!latestBelanja) {
      console.log("Data belanja tidak ditemukan");
      return;
    }
    // mencari product dlam data Buy dan mencocokkannya dengan data Items.name
    latestBelanja.items.forEach(async (item) => {
      const barang = await Items.findOne({ name: item.product });
      //jika barang ditemukan maka akan terjadi pengurangan dr Items.total
      if (barang) {
        barang.total -= item.sum;
        await barang.save();
      }
    });
    console.log("Total barang telah diperbarui");
  } catch (error) {
    console.error(error);
  }
}

module.exports = router;
