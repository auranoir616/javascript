const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/restAPI'
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Koneksi database gagal:'));
db.once('open', function () {
    console.log('Koneksi database berhasil!');
});
