var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//import ejs layout
var expressLayouts = require("express-ejs-layouts");
//import database
const database = require("./config/database");
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var moviesRouter = require("./routes/movies");

var app = express();
//!penggunaan passport
require("./config/passport")(passport);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
// penggunaan flash
app.use(flash());

// view engine setup
app.use(expressLayouts);
app.set("view engine", "ejs");

//connection mongodb
database.connection.on(
  "error",
  console.error.bind(console, "mongodb connection error")
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// global variable
//!untuk menyimpan sementara pesan-pesan (flash messages) dalam sesi (session)
app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  next();
});
//! menambahan router users
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/movies", moviesRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
