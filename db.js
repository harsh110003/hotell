const mongoose = require('mongoose')

const mongoUrl = 'mongodb://localhost:27017/htl'

mongoose.connect(mongoUrl)

const db = mongoose.connection

db.on('connected' , () => {
    console.log('Mongoose is connected')
})

db.on('error', (err) => {
    console.log('Mongoose connection error', err)
})

db.on('disconnected', () => {
    console.log('Mongoose is disconnected')
})

module.exports = db