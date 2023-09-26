const mongoose =require('mongoose')
const mongodb = 'mongodb://127.0.0.1:27017/dataStock'

mongoose.connect(mongodb,{
    useNewUrlParser:true
})
.then(()=>{
    console.log("database connected")
})
mongoose.Promise = global.Promise
module.exports = mongoose

