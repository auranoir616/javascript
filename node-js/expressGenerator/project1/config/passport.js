const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const user = require('../model/userSchema');
const passport = require('passport');

let errors = []

module.exports = function(passport){
    passport.use(new localStrategy({
        usernameField: 'email'
    },
    function(email, password, done){
        user.findOne({ email: email }).then(
            async (user) => {
            if (user) {
              if(await bcrypt.compare(password, user.password)){
                console.log(user)
                console.log("cek " + password , " || " ,user.password)
                return done(null,user)
            }else{
              errors.push({msg: "password salah"})
              console.log(errors)
              return done(null, false,)

              }
            }
            else{
              errors.push({msg: "email salah"})
              console.log(errors)
              return done(null, false,)
                
            
              }
            }
          ).catch((err)=>{
            console.log("internal server error" );
          })
        }));
    }

passport.serializeUser(function(user, done){
    done(null, user.id)
})
passport.deserializeUser(function(id, done){
    user.findById(id)
  .then((user)=>{
    done(null, user)
  })
  .catch((err)=>{
    done(err, null)
  })
  })