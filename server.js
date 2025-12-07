const express = require('express')
const app = express()
const db = require('./db')
const Person = require('./models/person')
const Menu = require('./models/menuitems')
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/' , (req,res) => {
    res.send('Welcome to our hotel')
})






const personRoute = require('./routes/personRoute')
const menuRoute = require('./routes/menuRoute')
app.use('/person', personRoute)
app.use('/menu', menuRoute)


app.listen(3000, () => {
    console.log('Server is running on port 3000')
})