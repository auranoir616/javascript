const http = require('http')
const server = http.createServer(function (req, res){
res.writeHead(200,{'Content-Type':"text/html"})
res.write('<h1>selamat!!! server berhasil dibuat</h1>')
    res.end('')
}) 
server.listen(8000)
console.log('server berjalan di port 8000')