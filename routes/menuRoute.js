const express = require('express')
const router = express.Router()
const Menu = require('./../models/menuitems')

router.post('/', async(req,res) => {
    try{
        const data = req.body
        const menu = new Menu(data)
        const response = await menu.save()
        console.log('data saved')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error : 'Internal Server Error'})
    }
})

router.get('/', async(req,res) => {
    try{
        const data = await Menu.find()
        console.log('data fetched')
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error : 'Internal Server Error'})
    }
})

module.exports = router