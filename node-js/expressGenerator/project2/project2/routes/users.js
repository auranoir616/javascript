var express = require('express');
var router = express.Router();
const User = require("../model/usersSchema")
var router = express.Router()
const { forwarduser } = require('../config/auth');
const passport = require("passport")
const bcrypt =require("bcrypt")



//!route register
router.get('/register', function(req, res, next) {
  res.render('register', {title: "halaman register"});
});
router.post('/register',function (req, res, next){
  const { nama, userId, password } = req.body
  console.log(req.body)

let info =[] //array untuk menyompan pesan
if(!nama||!userId||!password){
  info.push({msg: "lengkapi data anda"})
}
if(info.length > 0 ){
  res.render("register", {info})
  console.log(info)

}else{
User.findOne({userId:userId})
  .then((user)=>{
    if(user){
      info.push({msg: "ID sudah ada"})
      res.render("register", {info})
      console.log(info)
    }else{
      const newUser = new User ({
        nama: req.body.nama,
        userId: req.body.userId,
        password: req.body.password,
      })
      newUser
      .save()
      .then((user)=>{
        console.log(user)
        console.log("registrasi berhasil")
        res.redirect('/users/login')
      })
      .catch((err)=> console.log(err))
          // res.status(500).send('Gagal menyimpan data');

    }
  })
}
})

//!route login
router.get("/login", forwarduser, function (req, res, next) {
  res.render("login", {title: "halaman Login" });
});
router.post("/login", forwarduser,function (req, res, next) {
  const { userId, password } = req.body;

  let info = [];
  //error handling jika data login tidak lengkap
  if (!userId || !password) {
    info.push({ msg: "lengkapi data anda" });
    console.log("lengkapi data anda");
    // res.render("login", {info});

  }
  if (info.length > 0) {
    res.render("login", {info});
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
//         User.findOne({ userId: userId }).then(
//       async (user) => {
//       if (user) {
//         if(await bcrypt.compare(password, user.password)){
//           console.log(user)
//           console.log("cek " + password , " || " ,user.password)
//           res.redirect('/dashboard')
//         }else{
//           info.push({ msg: "password salah" });
//         console.log("password salah");
//         res.render("login", {error})

//         }
//       }
//       else{
//         info.push({ msg: "email salah" });
//         console.log("email salah");
//         res.render("login", {error})
//         }
//       }
//     ).catch((err)=>{
//       info.push({ msg: "internal server error" });
//       console.log(err.message);
//       res.render("login", {error})
//     })
//   }
// })

//!route logout
router.get("/logout",forwarduser, function(req,res){
  req.logout(function(err){
    if(err){
      console.log(err)
      return(err)
    }
  })
  res.redirect('/')
})
module.exports = router;
