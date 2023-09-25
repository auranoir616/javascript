module.exports = {
  //!jika belum login user akan selalu diarahkan ke halaman login
  cekuser: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/users/login");
  },
  //!jika sudah login user akan selalu diarahkan ke dashboard
  forwarduser: function (req, res, next) {
    if (!req.isAuthenticated()) {
      return next();
    }
    res.redirect("/dashboard");
  },
};
