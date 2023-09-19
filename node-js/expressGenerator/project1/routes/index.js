var express = require('express');
var router = express.Router();

//routing menuju halaman welcome
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'halaman welcome' });
});
//routing menuju halaman dasboard
router.get('/dashboard', function(req, res, next){
  res.render('dashboard', {title: "Halaman Dashboard"})
})

module.exports = router;
