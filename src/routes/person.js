const express = require('express')
const router = express.Router()

router.get('/api/person',(req,res)=>{
    res.send('You have requested a person')
})

router.get('/error', (req,res)=>{
    throw new Error('This is a forced error')
})

module.exports = router