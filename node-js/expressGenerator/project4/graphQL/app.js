const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const app = express()
const schema = require('./Schema/schema')
const mongoose = require('mongoose')


const mongodb = 'mongodb+srv://admin1:VC8hElfnygMHSNul@project1.0coflbg.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongodb,
 { useNewUrlParser: true }
)
.then(()=>console.log("database sudah terkoneksi"))
.catch((error) => {
    console.error("Error saat menghubungkan ke database:", error);
  });
app.use('/graphql', graphqlHTTP({
schema,
graphiql : true //! mengaktifkan graphql GUI
}))

mongoose.Promise = global.Promise

//!menjalankan server
app.listen(3500, ()=>{
    console.log("server berjalan ")
})