const mongoose = require('mongoose')

//koneksi ke database
const connectDB = async () =>{
    try{
        const con = await mongoose.connect('mongodb://127.0.0.1:27017/StudyCase',{
            useUnifiedTopology : true,
            useNewUrlParser: true,
        })
        console.log(`mongoDB Connected : ${con.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDB