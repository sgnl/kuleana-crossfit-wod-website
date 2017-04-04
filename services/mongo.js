
const mongoose = require('mongoose')
const Promise = require('bluebird')
const logger = require('./logger')

mongoose.Promise = Promise

const dbURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}`
const mongooseOptions = { promiseLibrary: Promise }

mongoose.connect(dbURL, mongooseOptions)

const Schema = mongoose.Schema

const phoneNumbersSubSchema = new Schema({
  phoneNumber: { required: true, type: String }
})

const PhoneNumberSubscriber = mongoose.model('PhoneNumberSubscriber', phoneNumbersSubSchema)

const addNewSubscriberToDatabase = phoneNumber => {
  let newSub = new PhoneNumberSubscriber({
    phoneNumber: Number(phoneNumber)
  })

  return newSub.save().then(() => {
    logger.info('newSub', { newSub })
    return newSub
  })
}

module.exports = {
  addNewSubscriberToDatabase
}
