const mongoose = require('mongoose')
const mongodb = 'mongodb://127.0.0.1:27017/olshop'

mongoose.connect(mongodb,{
    useNewUrlParser: true
})
.then(()=>console.log("databases connected"))

module.exports = mongoose