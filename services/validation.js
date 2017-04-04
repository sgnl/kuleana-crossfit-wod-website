
const validatePayload = validKeyList => (req, res, next) => {
  console.log('validating payload');
  return validKeyList.every(key => req.body.hasOwnProperty(key))
    ? next()
    : res.render('index')
}

module.exports = {
  validatePayload
}
