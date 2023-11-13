const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const user = require("../schema/userSchema");
const passport = require("passport");

module.exports = function (passport) {
  passport.use(
    new localStrategy(
      {
        usernameField: "username",
      },
      function (username, password, done) {
        user
          .findOne({ username: username })
          .then(async (user) => {
            if (user) {
              if (await bcrypt.compare(password, user.password)) {
                console.log(user);
                console.log("cek " + password, " || ", user.password);
                return done(null, user);
              } else {
                return done(null, false, { message: "password salah" });
              }
            } else {
              return done(null, false, { message: "Username salah" });
            }
          })
          .catch((err) => {
            console.log("internal server error" + err.message);
          });
      }
    )
  );
};

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  user
    .findById(id)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => {
      done(err, null);
    });
});
