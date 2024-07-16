const sequelize = require('sequelize')
const db = require('../db/connections')

const Job = db.define('job', {
    title:{
        type: Sequelize.STRING,
    },
    decription:{
        type: Sequelize.STRING
    },
    salary:{
        type: Sequelize.STRING
    },
    company:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    new_job:{
        type: Sequelize.INTEGER
    }
})

module.exports = Job