var express = require('express');
var router = express.Router();
const passport = require("passport")
const {forwarduser} = require('../config/auth')
const User = require('../schema/userSchema')
const app = express()

//! Menyimpan data user di app.locals.userInfo
let userInfo={username:''}
router.use((req, res, next) => {
  res.app.locals.userInfo = userInfo;
  next();
});

//?metode untuk login
router.get("/login", forwarduser, function (req, res, next) {
  res.render("login", {title: "halaman Login" });
});
router.post("/login", forwarduser,function (req, res, next) {
  const { username, password } = req.body;

  let info = [];
  //error handling jika data login tidak lengkap
  if (!username || !password) {
    info.push({ msg: "lengkapi data anda" });
    res.render("login", {info});

  }
  if (info.length > 0) {
    res.render("login", {info});
  }
  //error handling jika email salah
  else {
    passport.authenticate('local',{
      successRedirect: '/items/itemGet',
      failureRedirect: '/users/login',
      failureFlash: true
    })(req, res, next)
    let user = req.body.username
    userInfo.username = user
    console.log(res.app.locals.userInfo)
      };
    })

    //?metode untuk register
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Halaman register" });
});
router.post("/register", function (req, res, next) {
  const { name, email,username, password, password2 } = req.body;
  console.log(req.body);

  //penanganan error
  let info = [];
  //error handling jika data tidak lengkap
  if (!name || !email || !username || !password || !password2) {
    info.push({ msg: "lengkapi data anda" });
    console.log("lengkapi data anda");
  }
  //error handling jika kedua password sama
  if (password != password2) {
    info.push({ msg: "password tidak sama " });
    console.log("password tidak sama ");
  }
  if (info.length > 0) {
    res.render("register", {info});
  }
  //error handling jika email sudah terdaftar
  else {
    User.findOne({ username: username }).then((user) => {
      if (user) {
        info.push({ msg: "email sudah terdaftar" });
        console.log("email sudah terdaftar");
        res.render("register", {info});
      
        //jika tidak ada error maka data akan disimpan
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        });
        newUser
          .save()
          .then((user) => {
            console.log(user);
            console.log("berhasil registrasi");
            //respon akan langsung menuju halaman login
            res.redirect("/users/login");
          })
          .catch((err) => console.log(err));
      }
    
    });
  }
})

//!router logout
router.get("/logOut",function(req, res){
  req.logOut( function(err){
    if(err){
      console.error(err)
      return next(err)
    }
  })
  res.redirect("/")
})


module.exports = router;
