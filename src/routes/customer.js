let CustomerModel = require('../models/customer.model')
const express = require('express')
const router = express.Router()


router.post('/api/customer',(req,res)=>{
    if(!req.body){
        return res.status(404).send('Bad request')
    }
    let model = new CustomerModel(req.body)
    model.save()
    .then(doc => {
        if(!doc || doc.lenght === 0){
            return res.status(500).send(doc)
        }
        res.status(201).send(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.get('/api/customer', (req,res)=>{
    if(!req.query.email){
        return res.status(404).send('Not found')
    }
    CustomerModel.findOne({
        email: req.query.email
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.put('/api/customer', (req,res)=>{
    if(!req.query.email){
        return res.status(404).send('Not found')
    }
    CustomerModel.findOneAndUpdate({
        email: req.query.email
    }, req.body, {
        new: true
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.delete('/api/customer', (req,res)=>{
    if(!req.query.email){
        return res.status(404).send('Not found')
    }
    CustomerModel.findOneAndRemove({
        email: req.query.email
    })
    .then(doc => {
        res.json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

module.exports = router