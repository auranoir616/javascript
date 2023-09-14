const mongoose = require("mongoose")

//membuat schema/tabel bentuk data dalam database
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now,
    }
})
//mengdefinisikan bentuk dari database kedalam variable Contact 
//lalu diexports 
const Contact = mongoose.model("contact",contactSchema)
module.exports = Contact

