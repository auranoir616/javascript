const express =require('express')
const route = express.Router()

const controller = require('./mahasiswaController')

route.post('/api/mahasiswa', controller.create)
route.get('/api/mahasiswa', controller.find)
route.put('/api/mahasiswa/:datamahasiswa_id', controller.update)
route.delete('/api/mahasiswa/:datamahasiswa_id', controller.delete)

route.get('/api/mahasiswa/:datamahasiswa_id', controller.view)


module.exports = route
