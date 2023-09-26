var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'halaman utama' });
});
router.get('/dashboard', function(req, res, next) {
  res.render('dashboard', { title: 'halaman dashboard' });
});


module.exports = router;
