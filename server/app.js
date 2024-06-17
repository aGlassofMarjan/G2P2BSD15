if (process.env.NODE_ENV !== "production"){
  require('dotenv').config()
}

const express = require('express')
const app  = express()
const routers = require('./routers')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(routers)


module.exports = app