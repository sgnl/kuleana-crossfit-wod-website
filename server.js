
const express = require('express')
const bodyParser = require('body-parser')
const winston = require('winston')
const expressWinston = require('express-winston')

const { addNewSubscriberToDatabase } = require('./services/mongo')
const logger = require('./services/logger')
const { validatePayload } = require('./services/validation')

const server = express()

server.set('view engine', 'pug')
server.set('views', './views')

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/', (req, res) => {
  res.render('index')
})

server.post('/sub', validatePayload(['phone-number']),  (req, res) => {
  addNewSubscriberToDatabase(req.body['phone-number'])
    .then(phoneNumber => {
      res.json({ phoneNumber })
    })
})

module.exports = server
