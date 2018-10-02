const express = require('express')
const app = express()
const path = require('path')
// const volleyball = require('volleyball')
const db = require('./db')
const { School, Student } = db.models
app.use(require('body-parser').json()) // required for req.body below

const port = process.env.PORT || 3000 
app.listen(port, ()=> console.log(`Now listening to port: ${port}`))

// app.use(volleyball) // maybe morgan instead

// app.use(express.json())
// app.use(express.urlencoded({extended: true}))

// app.use('/api', require('./api'))

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res, next)=> {
  res.sendFile(path.join(__dirname, './index.html'))
})

// SCHOOL ROUTES:
app.get('/api/schools', (req, res, next)=> {
  School.findAll({
    //where: req.query,
    include: [ Student ],
    order: [
        ['name', 'ASC']
    ]
  })
    .then(students => res.json(students))
    .catch(next)
})


app.get('/api/schools/:id', (req, res, next)=> {
    School.findById(req.params.id, {
        include: [ Student ]
    })
    .then(school => res.json(school))
    .catch(next)
})


app.post('/api/schools', (req, res, next)=> {
    School.create(req.body)
    .then(school => res.json(school)) // can I just do send here?
    .catch(next)
})
  

app.put('/api/schools/:id', (req, res, next)=> {
    School.findById(req.params.id)
    .then(school => school.update(req.body))
    .then(school => res.json(school)) // can I just do send here?
    .catch(next)
})


app.delete('/api/schools/:id', (req, res, next)=> {
    School.findById(req.params.id)
      .then(school => school.destroy())
      .then(() => res.sendStatus(204))
      .catch(next)
})

  

// STUDENT ROUTES:
app.get('/api/students', (req, res, next)=> {
  Student.findAll({
    // where: req.query,
    include: [School],
    order: [
        ['firstName', 'ASC']
    ]
  })
    .then(students => res.json(students)) // can I just do send here?
    .catch(next)
})


app.get('/api/students/:id', (req, res, next)=> {
  Student.findById(req.params.id, {
    include: [School]
  })
    .then(student => res.json(student)) // can I just do send here?
    .catch(next)
})


app.post('/api/students', (req, res, next)=> {
    Student.create(req.body)
    .then(student => res.json(student)) // can I just do send here?
    .catch(next)
})
  

app.put('/api/students/:id', (req, res, next)=> {
    Student.findById(req.params.id)
    .then(student => student.update(req.body))
    .then(student => res.json(student)) // can I just do send here?
    .catch(next)
})


app.delete('/api/students/:id', (req, res, next)=> {
    Student.findById(req.params.id)
      .then(student => student.destroy())
      .then(() => res.sendStatus(204))
      .catch(next)
})


// ERROR HANDLER
app.use((err, req, res, next) => {
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})


// SYNC AND SEED THE DATABASE
db.syncAndSeed()
  .then(()=> console.log('Synced and Seeded'))



