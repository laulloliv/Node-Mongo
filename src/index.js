const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const router = require('./routes/person')

const app = express()

const personRoute = require('./routes/person') 
const customerRoute = require('./routes/customer')

app.use(bodyParser.json())

app.use((req,res,next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
    next()
})
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

app.use((req,res,next)=>{
    res.status(404).send('Sorry. You are lost.')
})

app.use((err,req,res,next)=>{
    console.log(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html',))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening in ${PORT}...`))