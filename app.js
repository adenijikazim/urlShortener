require('dotenv').config()
const express = require('express')
const dbConnect = require('./db')
const urlRouter = require('./routes/urlRoutes')

const app = express()
const port = 3000

app.use(express.json())
app.use('/urlShortener', urlRouter)

app.get('/urlShortener', (req, res) => {
    res.send('Hello World!')
})

dbConnect()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})