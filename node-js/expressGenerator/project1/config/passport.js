const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const user = require('../model/userSchema');
const passport = require('passport');

module.exports = function(passport){
    passport.use(new localStrategy({
        usernameField: 'email'
    },
    function(username, password, done){
        User.findOne({ email: email }).then(
            async (user) => {
            if (user) {
              if(await bcrypt.compare(password, user.password)){
                console.log(user)
                console.log("cek " + password , " || " ,user.password)
                return done(null,user)
            }else{
                return done(null, false,{msg: "password salah"})

              }
            }
            else{
                return done(null, false,{msg: "email salah"})
            
              }
            }
          ).catch((err)=>{
            error.push({ msg: "internal server error" });
          })
        }));
    }

passport.serializeUser(function(user, done){
    done(null, user.id)
})
passport.deserializeUser(function(id, done){
    user.findById(id, function(err, user){
        done(err, user)
    })
})
