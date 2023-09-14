const express = require('express')
const apirouter = require('./api-routes')
const bodyparser = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8000


app.get('/',(req, res)=>{
    res.send(
        "web server sukses"
    )
})
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json())
app.use('/api',apirouter)

mongoose.connect("mongodb://127.0.0.1:27017/restAPI",{
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
const db = mongoose.connection
db.on('error', console.error.bind(console, 'Koneksi database gagal:')); 
db.once('open', function () {
    console.log('Koneksi database berhasil');
});
app.listen(port,()=>{
    console.log(`server berjalan di port ${port}`)
})
