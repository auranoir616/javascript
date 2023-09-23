var express = require('express');
var router = express.Router();

//!routing menuju halaman welcome
//! res.render('welcome'... berarti merender file welcome.ejs didalam folder view
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'halaman welcome pp' });
});
//!routing menuju halaman dasboard 
//! res.render('dashboard'... berarti merender file dashboard.ejs didalam folder view
router.get('/dashboard', function(req, res, next){
  try{
  res.render('dashboard', {title: "Halaman Dashboard"})
  
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

module.exports = router;
