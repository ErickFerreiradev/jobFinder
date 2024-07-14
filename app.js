const express = require('express')
const app = express()
const db = require('./db/connections')

const por = 3000

app.listen(por, function(){
    console.log(`O Express está rodando na porta ${por}`)
})

// db connection

db
.authenticate()
.then(() =>{
    console.log("Conectou ao bd com sucesso")
})
.cath(err =>{
    console.log("Ocorreu um erro ao conectar", err)
})


// routes
app.get('/', (req, res) =>{
    res.send("Está rodando")
})