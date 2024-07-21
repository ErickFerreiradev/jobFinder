const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const path = require('path')
const db = require('./db/connections')
const bodyParser = require('body-parser')
const Job = require('./models/Job')

const por = 3000

app.listen(por, function(){
    console.log(`O Express está rodando na porta ${por}`)
})

// body parser
app.use(bodyParser.urlencoded({ extended: false}))

// handle bars
app.set('views', path.join(__dirname, 'views'))
app.engine('handlebars', exphbs.create({defaultLayout: 'main'}).engine)
app.set('view engine', 'handlebars')

//static folder
app.use(express.static(path.join(__dirname, 'public')))

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

    Job.findAll({order: [
        ['createdAt', 'DESC']
    ]})
    .then(jobs =>{
        res.render('index',
            jobs
        )
    })
    
})

// jobs routes
app.use('/jobs', require('./routes/jobs'))