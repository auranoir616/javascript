var express = require("express");
var router = express.Router();
const bcrypt =require("bcrypt")
const passport = require("passport")
const {forwarduser} = require('../config/auth')
//import userSchema
const User = require("../model/userSchema");

//metode untuk data users
//?metode untuk login
router.get("/login", forwarduser, function (req, res, next) {
  res.render("login", {title: "halaman Login" });
});
router.post("/login", forwarduser,function (req, res, next) {
  const { email, password } = req.body;

  let error = [];
  //error handling jika data login tidak lengkap
  if (!email || !password) {
    error.push({ msg: "lengkapi data anda" });
    console.log("lengkapi data anda");
    res.render("login", {error});

  }
  if (error.length > 0) {
    res.render("login", {error});
  }
  //error handling jika email salah
  else {
    passport.authenticate('local',{
      successRedirect: '/dashboard',
      failureRedirect: '/users/login',
      failureFlash: true
    })(req, res, next)
      };
    })
    
//     User.findOne({ email: email }).then(
//       async (user) => {
//       if (user) {
//         if(await bcrypt.compare(password, user.password)){
//           console.log(user)
//           console.log("cek " + password , " || " ,user.password)
//           res.redirect('/dashboard')
//         }else{
//           error.push({ msg: "password salah" });
//         console.log("password salah");
//         res.render("login", {error})

//         }
//       }
//       else{
//         error.push({ msg: "email salah" });
//         console.log("email salah");
//         res.render("login", {error})
//         }
//       }
//     ).catch((err)=>{
//       error.push({ msg: "internal server error" });
//       console.log(err.message);
//       res.render("login", {error})
//     })


//?metode untuk register
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Halaman register" });
});
router.post("/register", function (req, res, next) {
  const { name, email, password, password2 } = req.body;
  console.log(req.body);

  //penanganan error
  let error = [];
  //error handling jika data tidak lengkap
  if (!name || !email || !password || !password2) {
    error.push({ msg: "lengkapi data anda" });
    console.log("lengkapi data anda");
  }
  //error handling jika kedua password sama
  if (password != password2) {
    error.push({ msg: "password tidak sama " });
    console.log("password tidak sama ");
  }
  if (error.length > 0) {
    res.render("register", {error});
  }
  //error handling jika email sudah terdaftar
  else {
    User.findOne({ email: email }).then((user) => {
      if (user) {
        error.push({ msg: "email sudah terdaftar" });
        console.log("email sudah terdaftar");
        res.render("register", {error});
      
        //jika tidak ada error maka data akan disimpan
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
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

module.exports = router
