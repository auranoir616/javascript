var express = require("express")
var router = express.Router()
var stockIn = require('../model/inSchema')
var moment = require("moment")
const {cekuser} =require('../config/auth')

//!get data in
router.get('/', function(req,res,next){
    let liststock =[]
    stockIn.find({})
    .then((stockIn)=>{
        if(stockIn){
            for(let data of stockIn){
                liststock.push({
                    kode: data.kode,
                    nama: data.nama,
                    total_in: data.total_in,
                    date_in: data.date_in,
                    no_invoice: data.no_invoice,
                    keterangan: data.keterangan,
                })
            }
            console.log(liststock)
            res.render("dataStock/StockIn",{liststock})
        }
    })
    .catch((err)=>{
        console.log(err)
        next(err)
    })
})

//!post data in
router.get('/input', function(req,res, next){
    res.render("dataStock/inputin",{title: "hamalan input in"})
})
router.post("/input",cekuser, function(req,res){
    const{kode, nama, total_in, date_in, no_invoice, keterangan} = req.body
    let info =[]
    if(!kode|| !nama|| !total_in|| !date_in|| !no_invoice){
        info.push({msg: "lengkapi input data"})
    }
    if (info.length>0){
        res.render("dataStock/inputIn", {info})
    }else{
        const newStock = stockIn({
          kode,
          nama,
          total_in,
          date_in,
          no_invoice,
          keterangan,
        });
        console.log(newStock)
        newStock.save()
        .then((stockIn)=>{
            info.push({msg: "data stock berhasil ditambahkan"})
            res.render("dataStock/inputIn", {info})
        })
        .catch((err)=>console.log(err))
    }
})

//!delete data
router.get("/delete/:dataId", async function(req, res,){
    try{
        const data = await stockIn.findByIdAndDelete(res.params.dataId);
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

module.exports = router