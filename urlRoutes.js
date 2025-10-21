const express = require('express')

const urlRouter = express.Router()

const urlController = require('./urlController')

urlRouter.post('/', urlController.shortUrl)

module.exports = urlRouter