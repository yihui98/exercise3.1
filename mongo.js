const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.np5yn.mongodb.net/phoneDb?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const contactSchema = new mongoose.Schema({
    name: String,
    number : String
})

const Contact = mongoose.model('Contact', contactSchema)

if (process.argv.length ==3 ){
    Contact.find({}).then(result =>{
        console.log("phonebook:")
        result.forEach(contact =>{
            console.log(`${contact.name} ${contact.number}`)
        })
    mongoose.connection.close()
    })

}


if (process.argv.length ==5){
    const name = process.argv[3]
    const number = process.argv[4]

    const contact = new Contact({
        name: name,
        number: number
      })
    
    contact.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    })
}






