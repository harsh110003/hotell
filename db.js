const mongoose = require('mongoose')
require('dotenv').config()

// const mongoUrl = 'mongodb://localhost:27017/htl'
// const mongoUrl_local = process.env.MONGODB_URL_LOCAL
const mongoUrl = process.env.MONGODB_URL

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