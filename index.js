//const http = require('http') //import http from 'http'
require('dotenv').config()
const Contact = require('./models/phonebook')
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')


const app = express()

morgan.token('contact', (req, res) => JSON.stringify(req.body))

app.use(express.static('build'))
app.use(bodyParser.json())
//app.use(express.json())

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :contact'))

  app.get('/api/persons', (request, response) =>{
    Contact.find({}).then(contacts =>{
      response.json(contacts.map(c => c.toJSON()))
    })
  })

  app.get('/api/persons/:id', (request, response, next) => {
    Contact.findById(request.params.id).then(contacts => {
      if (contacts){
        response.json(contacts)
      } else{
        response.status(404).end()
      }
    })
    .catch(error => next(error))
  })

  
  app.get('/info', (request,response) => {
    Contact.find({}).then(contacts =>{
      const number = contacts.length
      const date = new Date()    
    const info = `<div>
    <p>Phonebook has info for ${number} people<p>
    <p> ${date} <p> </div>`
    response.send(info)
    })
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const contacts = {
    name: body.name,
    number: body.number,
  }

  Contact.findByIdAndUpdate(request.params.id, contacts, { new: true })
    .then(updatedContact => {
      response.json(updatedContact.toJSON())
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response) => {
  Contact.findByIdAndRemove(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => next(error))
  })



app.post('/api/persons', (request, response, next) => {
    const body = request.body
  
    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }  
    const person = new Contact({
      name: body.name,
      number: body.number
    })

    person.save().then(savedContact =>{
      response.json(savedContact.toJSON())
    })
    .catch(error => next(error))
  })

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

  app.use(unknownEndpoint)

  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
  
    next(error)
  }
  app.use(errorHandler)

  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })