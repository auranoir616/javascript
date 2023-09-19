const express = require("express")
const bodyParser = express

//morgan digunakan untuk mencatat log yang dilakukan didatabase
const morgan = require("morgan")
const connectDB = require("./server/database/connection") 


connectDB()

const app = express()
const port = 8000
app.use(morgan("tiny"))
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())

app.use("/", require("./server/routes/router"))

app.listen(port, ()=>{
    console.log("server berjalan di http://localhost:" + port)
})