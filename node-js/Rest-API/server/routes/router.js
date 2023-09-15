
//import express dan router
const express =require("express")
const route = express.Router()

const controller =require('../controller/controller')

route.post('/api/users',controller.create)
route.get('/api/users',controller.find)
route.put('/api/users/:username',controller.update)
route.delete('/api/users/:username',controller.delete)

module.exports = route
