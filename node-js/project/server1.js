const http = require('http')
const server = http.createServer(function (req, res){
    res.end('server berhasil dibuat')
}) 
server.listen(8000)
console.log('server berjalan di port 8000')