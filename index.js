//const http = require('http') //import http from 'http'
const repl = require('repl');
const express = require('express')
const app = express()
var morgan = require('morgan')

app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('build'))


let persons =  [
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 1
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 2
      },
      {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 3
      },
      {
        "name": "Abby",
        "number": "91282031",
        "id": 4
      },
      {
        "name": "Arto Hellas",
        "number": "231234",
        "id": 5
      }
    ]

  app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })

  app.get('/api/persons', (request, response) =>{
    response.json(persons)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id) //change to integer
    const person = persons.find(person => {
        return person.id === id
      })
    if (person){
        response.json(person)
    } else {
        response.status(404).end()
    }
  })

  app.get('/info', (request,response) => {
    const number = persons.length
    const date = new Date()    

    const info = `<div>
    <p>Phonebook has info for ${number} people<p>
    <p> ${date} <p> </div>`
    response.send(info)
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end() //204 = no content
  })

  const generateId = () => {
    return Math.floor(Math.random() * (10000 - 1) + 1)
  }

  morgan.token('contact', (req, res) => JSON.stringify(req.body))
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms :contact'))

app.post('/api/persons', (request, response) => {
    const body = request.body

    const allNames = []
    persons.map(person =>
      allNames.push(person.name)
    )
  
    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    } else if (allNames.includes(body.name)){
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
  
    const person = {
      name: body.name,
      number: body.number,
      date: new Date(),
      id: generateId(),
    }
  
    persons = persons.concat(person)
    response.json(person)
  })




  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }

  app.use(unknownEndpoint)

  const PORT = process.env.PORT||3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })