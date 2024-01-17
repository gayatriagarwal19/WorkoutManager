const express = require('express')

const router = express.Router()

router.get('/', (req,res)=>{
    res.json({mssg: 'get all'})
})

router.get('/:id', (req,res)=>{
    res.json({mssg: 'get single'})
})

router.post('/', (req,res)=>{
    res.json({mssg: 'send new'})
})

router.delete('/:id', (req,res)=>{
    res.json({mssg: 'delete'})
})

router.patch('/:id', (req,res)=>{
    res.json({mssg: 'update'})
})

module.exports = router