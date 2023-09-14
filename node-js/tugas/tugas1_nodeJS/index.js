const express = require('express')
const apps = express()
const port = 8080
const apirouter = require("./DataSiswa")

apps.get("/",(req, res)=>{
    res.send(
        "Selamat Datang Di Data Center Siswa Indonesia"
    )
})

apps.use("/DataSiswa",apirouter)

apps.listen(port, ()=>{
    console.log(`server berjalan di port ${port}`)
})

