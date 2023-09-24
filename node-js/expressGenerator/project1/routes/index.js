var express = require('express');
var router = express.Router();

const {cekuser, forwarduser} = require('../config/auth')

//!routing menuju halaman welcome
//! res.render('welcome'... berarti merender file welcome.ejs didalam folder view
router.get('/', forwarduser, (req, res, next)=> {
  res.render('welcome', { title: 'halaman welcome pp' });
});
//!routing menuju halaman dasboard 
//! res.render('dashboard'... berarti merender file dashboard.ejs didalam folder view
router.get('/dashboard',cekuser, (req, res, next)=>{
  try{
  res.render('dashboard', {title: "Halaman Dashboard"})
  
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

module.exports = router;
