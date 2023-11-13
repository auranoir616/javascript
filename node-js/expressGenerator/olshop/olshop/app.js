var createError = require('http-errors');
var express = require('express');
var path = require('path');
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const database = require('./config/database')
const passport = require("passport");
const session = require("express-session");
const flash = require("connect-flash");

var expressLayouts = require('express-ejs-layouts')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itemsRouter = require('./routes/items')
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
app.use(flash());

//!untuk menyimpan sementara pesan-pesan (flash messages) dalam sesi (session)
app.use((req, res, next) => {
  res.locals.error = req.flash("error");
  next();
});
// view engine setup
app.use(expressLayouts)
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//!penambahan router
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/items', itemsRouter)
//!konfigurasi body paser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//!koneksi database
database.connection.on(
  "error",
  console.error.bind(console, "database connection error")
);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
