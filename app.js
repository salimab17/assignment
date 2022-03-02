
const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
})
app.get('/about', (req, res) => {
    res.render('about');s
  })
  app.get('/contact', (req, res) => {
    res.render('contact');s
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
