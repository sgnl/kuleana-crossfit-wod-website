
const express = require('express')
const bodyParser = require('body-parser')
const winston = require('winston')
const expressWinston = require('express-winston')

const { logger } = require('./services')

const server = express()

server.set('view engine', 'pug')
server.set('views', './views')

server.use(express.static('public'))
server.use(bodyParser.urlencoded({ extended: true }))

server.get('/', (req, res) => {
  res.json('hihihihihi')
})

module.exports = server;