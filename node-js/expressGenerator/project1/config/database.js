//setup connection mongoodb

const mongoose = require('mongoose')
const mongodb = 'mongodb://127.0.0.1:27017/project1'

mongoose.connect(mongodb,{
    useNewUrlParser:true
})
.then(()=> console.log("mongodb connected"))

mongoose.Promise = global.Promise
module.exports = mongoose