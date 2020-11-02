const express = require('express')
var schedule = require('./routes/schedule')
const app = express()
const port = 3000

app.use('/', schedule)

app.listen(port, () => {
    console.log(`Application listening at http://localhost:${port}`)
})
