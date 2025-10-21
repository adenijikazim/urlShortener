const mongoose = require('mongoose')


const urlSchema =new mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
    }

})


const urlModel = mongoose.model('urlModel', urlSchema)

module.exports = urlModel