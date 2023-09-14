const express = require('express')
const router = express.Router()
// const app = express()

//membuat pesan jika koneksi berhasil
router.get('/', (req, res)=>{
    res.json({
        status: 'API lancar',
        message: "restapi routing berhasil dibuat"
    })
})

//import contactController
const contactController = require("./contactController")

//import metode yang sudah dibuat di contactController
router.route('/contacts')
.get(contactController.index)
.post(contactController.new)

//import metode yang sudah dibuat di contactController
router.route("/contacts/:contact_id")
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);
    
    module.exports = router

// app.put('/api/contacts/:contact_id', contactController.update);
// app.put('/api/contacts', (req, res) => {
//     if(err){
//         res.json({
//             status: "error id tidak ada",
//             message: "error",
//         })
//     }})



// router.post("/",(req, res)=>{
//     res.send(
//         "request create ok"
//     )
// })

// router.put("/",(req, res)=>{
//     res.send(
//         "request update ok"
//     )
// })

// router.delete("/", (req, res)=>{
//     res.send(
//         "request delete ok"
//     )
// })

