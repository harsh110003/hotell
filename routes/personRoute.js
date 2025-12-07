const express = require('express')
const router = express.Router()
const Person = require('./../models/person')

router.post('/' , async(req,res) => {
    try{
        const data = req.body
        const person = new Person(data)
        const response = await person.save()
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
        const resp = await Person.find()
        console.log('data fetched')
        res.status(200).json(resp)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error : 'Internal Server Error'})
    }
})

router.get('/:workType', async(req,res) => {
    try{
        const worktype = req.params.workType
        if(worktype == 'chef' || worktype == 'manager' || worktype == 'owner' || worktype == 'waiter'){
            const response = await Person.find({work : worktype})
            console.log('data fetched')
            res.status(200).json(response)
        }
        else{
            res.status(400).json({error : 'Invalid work type'})
        }
     }
     catch(err){
        console.log(err)
        res.status(500).json({error : 'Internal Server Error'})
     }
})

router.put('/:id', async(req,res) => {
    try{
        const personId = req.params.id
        const data = req.body
        const response = await Person.findByIdAndUpdate(personId, data,{
            new : true,
            runValidators : true
        })
        if(!response){
            res.status(404).json({error : 'Person not found'})
        }
        console.log('data updated')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error : 'Internal Server Error'})
    }
})

router.delete('/:id', async(req,res) => {
    try{
    const personId = req.params.id
    const response = await Person.findByIdAndDelete(personId)

    if(!response){
        res.status(404).json({error : 'Person not found'})
    }
    console.log('data deleted')
    res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error : 'Internal Server Error'})
    }
})

//hii welcome to personRoute
module.exports = router