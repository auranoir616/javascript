//import mongoose dan inisiasi schema
const mongoose = require("mongoose"),
  schema = mongoose.Schema;
//import bcrypt
const bcrypt = require("bcrypt");
// tingkat kerumitan enkripsi
const bcrypt_round = 5; 
//import schema dari mongoose
const { Schema } = require("mongoose");
//import validator untuk metode validasi data
const validator = require("validator");
//pembuatan schema
const user_schema = new Schema({
  username: {
    type: String,
    required: true,
// digunakan untuk membuat username tidak ada duplikat
    index: { unique: true }, 
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: { 
//metode validasi email dengan format email
      validator: function (str) {
        return validator.isEmail(str);
      },
      message: "email tidak valid",
    },
  },
  data_joined: {
    type: Date,
    default: Date.now(),
  },
});
//enkripsi password sebelum disave
user_schema.pre("save", function (next) {
//this mengacu pada object yang sedang diproses
  const user = this; 
  if (user.isModified("password")) {
//generate salt
    bcrypt.genSalt(bcrypt_round, function (err, salt) {
      if (err) return next(err);
//generate password enkripsi
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
//password hasil enkripsi dijadikan password user
        user.password = hash;
        next();
      });
    });
  }else return next()
});
//enkripsi password sebelum diupdate
user_schema.pre("findOneAndUpdate", async function (next) {
   try{
    if(this._update.password){
        const hashed = await bcrypt.hash(this._update.password,bcrypt_round)
        this._update.password = hashed
    }
    next()
    }catch(err){
        return next(err)} 
  });
//metode apakah update password menggunakan password yang sama atau tidak
user_schema.method.isPassMatch = function(pass, callback){
    bcrypt.compare(pass, this.password , function(err, isMatch){
        if (err) return callback(err)
        callback(null, isMatch)
    })
}
module.exports = mongoose.model("user", user_schema)