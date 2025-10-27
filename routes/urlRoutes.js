const express = require('express')
const urlRouter = express.Router()

const { shortUrl,redirectLink } = require('../controller/urlController')

urlRouter.post('/', shortUrl )
urlRouter.get('/:shortUrl', redirectLink)

module.exports = urlRouter