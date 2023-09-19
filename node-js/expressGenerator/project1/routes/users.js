var express = require('express');
var router = express.Router();

//import userSchema
const User = require('../model/userSchema')

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login',{title: "halaman login"});
});

router.get('/register', function(req, res, next){
  res.render('register', {title: "Halaman register"})
})

router.post('/register', function(req, res, next){
  const {name, email, password,password2} = req.body
console.log(req.body)


let error = []
if(!name || !email || !password || !password2){
  error.push("lengkapi data anda")
  console.log("lengkapi data anda")
}
if(password != password2){
  error.push("password tidak sama ")
  console.log("password tidak sama ")
}
if(error.length > 0 ){
  res.render('register',{
    error,
    name,
    email,
    password
  })
}
else{
  User.findOne({email : email})
  .then( user =>{
    if(user){
      error.push("email sudah terdaftar")
      console.log("email sudah terdaftar")
      res.render('register',{
        error,
        name,
        email,
        password
      })
    }else {
      const newUser = new User ({
        name : req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      newUser.save()
      .then(user =>{
        console.log(user)
        console.log("berhasil registrasi")
        res.redirect('/users/login')
      })
      .catch(err=> console.log(err))
    }
  })
}
})


module.exports = router;
