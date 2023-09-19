const mongoose = require('mongoose')
const express =require('express')
const bodyParser = express 
const app = express()
const port = 8080


const connectDB = async () =>{
    try{
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/mahasiswa",{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`database Connected : ${conn.connection.host}`)
    }catch{
        console.log(err)
        process.exit(1)
    }
}
connectDB()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/', require('./api-routes'))
app.listen(port,()=>{
    console.log('server berjalan di port ' + port)
})
