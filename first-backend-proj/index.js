const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('<h2>Instagram</h2> <br> You are now using instagram...')
})

app.get('/twitter', (req, res) => {
    res.send('Hello from twitter, now known as "x"');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
