var express = require("express");
var router = express.Router();
var movie = require("../model/movieSchema");
var moment = require("moment");

const {cekuser} = require('../config/auth')
//!menampilkan semua data movies
router.get("/", cekuser, function (req, res, next) {
  let listMovies = [];
  movie
    .find({})
    .then((movies) => {
      if (movies) {
        for (let data of movies) {
          listMovies.push({
            id: data.id,
            name: data.name,
            released_on: data.released_on,
          });
        }
        console.log(listMovies);
        res.render("movies/allmovies", { listMovies });
      } else {
        listMovies.push({
          id: "",
          name: "",
          released_on: "",
        });
        res.render("movies/allmovies", { listMovies });
      }
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});
//create movies
router.get("/create",cekuser, function (req, res, next) {
  res.render("movies/createMovies", { title: "Halaman Create Movies" });
});

//!menampilkan data movies dalam form
router.get("/update/:movieId", cekuser, async function (req, res, next) {
  try {
    const movieupdate = await movie.findById(req.params.movieId);
    if (movieupdate) {
      var newDate = moment(movieupdate.released_on).format("YYYY-MM-DD");
      res.render("movies/updateMovies", {
        movieupdate: movieupdate,
        newDate,
      });
      console.log(movieupdate);
    }
  } catch (err) {
    console.log(err);
  }
});


//!action update data movies baru
router.post("/update", cekuser, async function (req, res) {
  let error = [];

  try {
    const updatemovie = await movie.findByIdAndUpdate(
      req.body.id,
      { name: req.body.name, released_on: req.body.date },
      { new: true }
    );
    console.log(updatemovie);
    if (updatemovie) {
      error.push({ msg: "data berhasil diupdate" });
      var newMovies = { _id: req.body.id, name: req.body.name };
      var newDate = moment(updatemovie.released_on).format("YYYY-MM-DD");
      res.render("movies/updateMovies", {
        movieupdate: newMovies, //mengganti data lama dengan data baru 
        newDate,
        error,
      });
    } else {
      error.push({ msg: "data tidak ditemukan" });
      res.render("/movies/updateMovies", { error: error });
    }
  } catch (err) {
    console.log(err);
  }
});




//!action create movie
router.post("/create",cekuser, function (req, res) {
  const { name, date } = req.body;
  let error = [];
  if (!name || !date) {
    error.push({ msg: "silahkan lengkapi data movie" });
  }
  if (error.length > 0) {
    res.render("movies/createMovies", { error });
  } else {
    const newMovie = movie({
      name,
      released_on: date,
    });
    console.log(newMovie);
    newMovie
      .save()
      .then((movie) => {
        error.push({ msg: "data movie berhasil ditambahkan" });
        res.render("movies/createMovies", { error });
      })
      .catch((err) => console.log(err));
  }
});

//!action delete
router.get("/delete/:movieId", cekuser, async function (req, res) {
  try {
    const result = await movie.findByIdAndDelete(req.params.movieId);
    if (result) {
      console.log("film berhasil dihapus");
    } else {
      console.log("film gagal dihapus");
    }
    res.redirect("/movies");
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
