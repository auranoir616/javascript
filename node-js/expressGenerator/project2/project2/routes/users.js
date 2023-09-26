var express = require('express');
var router = express.Router();
const user = require("../model/users")
var router = express.Router()
const { forwarduser } = require('../config/auth');
const passport = require('../config/passport');


//!route register
router.get('/register', function(req, res, next) {
  res.render('register', {title: "halaman register"});
});
router.post('/register', (req, res, next)=>{
  const {nama, Id, password } = req.body
  console.log(req.body)

let info =[] //array untuk menyompan pesan
if(!nama || !userId || !password){
  info.push({msg: "lengkapi data anda"})
}
if(info.length > 0 ){
  res.render("register", {info})
}else{
  user.findOne({userId:userId})
  .then((user)=>{
    if(user){
      info.push({msg: "ID sudah ada"})
      res.render("register", {info})
    }else{
      const newUser = new user ({
        nama: req.body.nama,
        userId: req.body.userId,
        password: req.body.password,
      })
      newUser
      .save()
      .then((user)=>{
        console.log(user)
        res.redirect('/users/login')
      })
      .catch((err)=> console.log(err))
    }
  })
}
})

//!route login
router.get("/login", forwarduser, function(req, res, next){
  res.render("login", {title: "halaman login"})
})
router.post("/login", forwarduser, function(req,res, next){
  const{userId, password} = req.body
  let info =[]
  if(!userid||!password){
    info.push({msg: "data tidak lengkap"})
    res.render('login', {info})
  }
  if(info.length> 0){
    res.render("login", {info})
  }
  else{
    passport.authenticate('local',{
      succesRedirect: "/dashboard",
      failureRedirect: "/users/login",
      failureFlash: true
    })(req, res, next)
  }
})

//!route logout
router.get("/logout", function(req,res){
  req.logout(function(err){
    if(err){
      console.log(err)
      return(err)
    }
  })
  res.redirect('/')
})
module.exports = router;
