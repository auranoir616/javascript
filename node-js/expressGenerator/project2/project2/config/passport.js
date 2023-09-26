const localStrategy = require('passport-local').Strategy
const bcrypt =require('bcrypt')
const user = require("../model/users")
const passport =require("passport")

module.exports = function (passport){
    passport.use(
        new localStrategy(
            {
                usernameField: "userId"
            },
            function (userId, password, done){
                user
                .findOne({ userId:userId})
                .then(async (user)=>{
                    if(user){
                        if (await bcrypt.compare(password, user.password)){
                            console.log(user)
                            console.log(password, '||', user.password)
                            return done(null, user)
                        }else{
                            return done(null, false, {message: "password salah"})
                        }
                    }
                        else{
                            return done(null, false, {message: "ID salah"})
                        }
                    
                })
                .catch((err)=>{
                    console.log("internal server error" + err.message)
                })
            }
      )
    )
}
passport.serializeUser(function (user, done){
    done(null, user.id)
})
passport.deserializeUser(function (id, done){
    user.findById(id)
    .then((user)=>{
        done(null, user)
    })
    .catch((err)=>{
        done(err, null)
    })
})