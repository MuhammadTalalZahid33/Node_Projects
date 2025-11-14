const express = require('express')
require('dotenv').config()

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('<h2>Instagram</h2> <br> You are now using instagram...')
})

app.get('/twitter', (req, res) => {
    res.send('Hello from twitter, now known as "x"');
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
