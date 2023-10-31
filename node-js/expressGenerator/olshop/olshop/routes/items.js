var express = require("express");
var router = express.Router();
var Items = require("../schema/ItemSchema");
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("itemPost", { title: "POST" });
});

router.post("/itemPost", function (req, res, next) {
  const { name, price, image, desc, total, shop } = req.body;
  let info = [];
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
})
// let ItemsArray =[];
let fruitsData =[];
let info;
router.get("/itemGet", function (req, res, next) {
  let ItemsArray =[];
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
        res.render("itemGet", { ItemsArray,fruitsData,info});
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
router.get("/Add/:fruitID", async function (req, res, next) {
  let info1= []
info = info1
  try {

    const fruitName = await Items.findById(req.params.fruitID);
    if(fruitsData.some(data =>data.id === fruitName.id)){
      info1.push({msg:"buah sudah ada dalam keranjang"})
      res.redirect("/items/itemGet");
    }else{
      fruitsData.push({
        product: fruitName.name,
        harga: fruitName.price,
        id: fruitName.id
      });
      info1.push({msg:"buah berhasil ditambahkan"})
      console.log(fruitsData);
      res.redirect("/items/itemGet");
    }

  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
