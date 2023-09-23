const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now,
    }

})
//!metode encrypsi password 
userSchema.pre('save', async function(next){
    if (this.password){
        const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt) 
    }
    next()
})

module.exports = mongoose.model('User', userSchema)