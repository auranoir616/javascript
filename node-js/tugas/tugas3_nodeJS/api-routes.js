const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    res.json({
        status: "sukses",
        Message: "routing berhasil"
    })
})
const siswaController =  require('./siswaController')

router.route('/siswa')
.get(siswaController.index)
.post(siswaController.new)

router.route('/siswa/:siswa_id')
.put(siswaController.update)
module.exports = router