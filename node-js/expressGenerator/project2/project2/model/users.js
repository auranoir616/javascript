const mongoose= require('mongoose')
const bcrypt = require('bcrypt')

const usersSchema = new mongoose.Schema({
    nama:{
        type: String,
        required: true
    },
    userId: {
        type:String,
        required: true,
        trim: true
    },
    password:{
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//! metode enkripsi
usersSchema.pre('save', async function(next){
    if(this.password){
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password,salt)
    }
    next()
})

module.exports = mongoose.model('user',usersSchema)