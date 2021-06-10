module.exports = (app) => {
  const controller = require('../controllers/book.controller.js')
  var router = require('express').Router()
  router.post('/', controller.create)
  app.use('/api/books', router)
}
