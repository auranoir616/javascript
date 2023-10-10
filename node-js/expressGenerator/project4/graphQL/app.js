const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const app = express()
const schema = require('./Schema/schema')
app.use('/graphql', graphqlHTTP({
schema,
graphiql : true //! mengaktifkan graphql GUI
}))

//!menjalankan server
app.listen(3500, ()=>{
    console.log("server berjalan ")
})