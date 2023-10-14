var express = require("express")
var router = express.Router()
var stockIn = require('../model/inSchema')

const {cekuser} =require('../config/auth')

//!get data in
router.get('/',cekuser, function(req,res,next){
    let liststock =[]
    stockIn.find({})
    .then((stockIn)=>{
        if(stockIn){
            for(let data of stockIn){
                const date = new Date(data.date_in);
                const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
                liststock.push({
                    id: data.id,
                    kode: data.kode,
                    nama: data.nama,
                    total_in: data.total_in,
                    date_in: formattedDate,
                    no_invoice: data.no_invoice,
                    harga_satuan: data.harga_satuan,
                })
            }
            res.render("dataStock/StockIn",{liststock})
            console.log(stockIn)
        }else{
            liststock.push({
                kode: "",
                nama: "",
                total_in: "",
                date_in: "",
                no_invoice: "",
                harga_satuan: "",
            })
            res.render("dataStock/StockIn",{liststock})

        }
    })
    .catch((err)=>{
        console.log(err)
        next(err)

    })
})

//!post data in
router.get('/input', cekuser,function(req,res, next){
    res.render("dataStock/inputin",{title: "hamalan input in"})
})
router.post("/input",cekuser, function(req,res){
    const{kode, nama, total_in, date_in, no_invoice, keterangan} = req.body
    let info =[]
    if(!kode||!nama||!total_in){
        info.push({msg: "lengkapi input data"})
    }
    if (info.length>0){
        res.render("dataStock/inputIn", {info})
        console.log(info)

    }else{
        const newStock = stockIn({
          kode: req.body.kode,
          nama: req.body.nama,
          total_in: req.body.total_in,
          date_in: req.body.date_in,
          no_invoice: req.body.no_invoice,
          harga_satuan: req.body.harga_satuan
        });
        newStock
        .save()
        .then((stockin)=>{
            console.log(stockin)
            info.push({msg: "data stock berhasil ditambahkan"})
            res.render("dataStock/inputIn", {info})
        })
        .catch((err) => {
            console.error(err);
            const info = [{ msg: "Terjadi kesalahan saat menambahkan data stock" }];
            res.render("dataStock/inputIn", { info });
        });
    }
})

//!delete data
router.get("/delete/:dataId",cekuser, async function(req, res){
    try{
        const data = await stockIn.findByIdAndDelete(req.params.dataId);
        if(data){
            console.log("delete data berhasil")
        }else{
            console.log('delete data gagal')
        }
        res.redirect('/dataStock')
    }catch(err){
        console.log(err)
    }
})
//!route get json
router.get('/json',cekuser, function(req,res,next){
    let liststock =[]
    stockIn.find({})
    .then((stockIn)=>{
        if(stockIn){
            for(let data of stockIn){
                const date = new Date(data.date_in);
                const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
                liststock.push({
                    id: data.id,
                    kode: data.kode,
                    nama: data.nama,
                    total_in: data.total_in,
                    date_in: formattedDate,
                    no_invoice: data.no_invoice,
                    harga_satuan: data.harga_satuan,
                })
            }
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(liststock));
            // console.log(stockIn)
        }})
    })
module.exports = router