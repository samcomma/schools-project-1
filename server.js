const express = require('express')
const app = express()
const db = require('./db')
const path = require('path')
const {} = db.models

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Now listening to port: ${port}`))



app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, 'index.html'))
})



app.get('/api/schools', (req, res, next)=> {

})

app.get('/api/schools/:id', (req, res, next)=> {

})

app.post('/api/schools', (req, res, next)=> {

})

app.get('/api/students', (req, res, next)=> {

})

app.get('/api/students/:id', (req, res, next)=> {

})

app.post('/api/students', (req, res, next)=> {

})



db.syncAndSeed()