var express = require('express')
var router = express.Router()

//menampilkan semua data movies
router.get("/", function(req, res, next){
    res.render('movies/allmovies',{title: "Halaman Get Movies"})
})
//create movies
router.get('/create',function(req, res, next){
    res.render("movies/createMovies",{title:"Halaman Create Movies"})
})

//update movies
router.get("/update/:movieId", function(req, res, next){
    res.render("movies/updatemovies", {title: "Halaman update Movie", movieId:req.params.movieId})
})

//action create
router.post('/create', function(req,res){

})
//action update
router.put("/update/:movieId",function(req, res){

})
//action delete
router.delete("/delete/:movieId", function(req,res){

})

module.exports = router