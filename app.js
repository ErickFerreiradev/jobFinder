const express = require('express')
const app = express()
const db = require('./db/connections')
const bodyParser = require('body-parser')

const por = 3000

app.listen(por, function(){
    console.log(`O Express está rodando na porta ${por}`)
})

// body parser
app.use(bodyParser.urlencoded({ extended: false}))

// db connection

db
.authenticate()
.then(() =>{
    console.log("Conectou ao bd com sucesso")
})
.catch(err =>{
    console.log("Ocorreu um erro ao conectar", err)
})


// routes
app.get('/', (req, res) =>{
    res.send("Está rodando home")

})

// jobs routes
app.use('/jobs', require('./routes/jobs'))