const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/contact', (req, res) => {
  res.send('Contact Page!')
})
app.get('/about', (req, res) => {
  res.send('About Page!')
})
app.get('/data', (req, res) => {
  res.send('This is you data page!')
})

app.listen(3000, () => {
  console.log(`App is running...`)
})
