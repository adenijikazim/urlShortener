const express = require('express')

const urlRouter = express.Router()

const urlController = require('./urlController')

urlRouter.post('/', urlController.shortUrl)
urlRouter.get('/:shortUrl', urlController.redirectLink)

module.exports = urlRouter