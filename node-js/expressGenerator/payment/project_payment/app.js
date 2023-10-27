const express = require('express')
const request = require('request')
const bodyParser = require("body-parser")
const pug = require('pug')
const _ = require('lodash')
const path = require('path')
const {Donor} = require('./models/donor')
const { error } = require('console')
const { initializePayment, verifyPayment} = require('./config/paystack')(request)
const port = process.env.PORT || 3001;
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname, 'public/')))
app.set('view engine', pug)

app.get('/', (req, res)=>{
    res.render('index.pug')
})

app.post('/paystack/pay', (req, res) => {
    const form = _.pick(req.body,['amount','email','full_name']);
    form.metadata = {
        full_name : form.full_name
    }
    form.amount *= 100;
    let response;
    initializePayment(form, (error, body) => {
        if(error){
            //handle errors
            console.log(error);
            return res.status(500).json({ error: 'Terjadi kesalahan saat menginisialisasi pembayaran.' });;
        }
        response = JSON.parse(body);
        res.redirect(response.data.authorization_url)
        // res.redirect('/index')
    })
  });

app.get('/paystack/callback', (req, res)=>{
    const ref = req.query.reference
    verifyPayment(ref, (error, body)=>{
        if(error){
            console.log(error)
            return res.redirect('/error')
        }
        response = JSON.parse(body)
        const data = _.at(response.data, ['reference','amount','customer.email','metadata.full_name'])

        [reference, amount, email, full_name]
        newDonor = {reference, amount, email, full_name}
        const donor = new Donor(newDonor)

        donor.save().then((donor)=>{
            if(!donor){
                return res.redirect('/error')
            }
            res.redirect('/receipt/'+donor._id)
        }).catch((err)=>{
            res.redirect('/error')
        })

    })
})

app.get('/receipt/:id', (req, res)=>{
    const id = req.params.id
    Donor.findById(id).then((donor)=>{
        if(!donor){
        res.redirect('/error')
        }
        res.render('success.pug',{donor})
    }).catch((e)=>{
        res.redirect('/error')
    })
})
app.get('/error', (req, res)=>{
    res.render('error.pug')
})
app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})

