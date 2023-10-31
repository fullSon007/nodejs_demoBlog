const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 8000

app.use(express.static(path.join(__dirname, 'puplic')))

app.use(express.urlencoded(
  {
    extended: true
  }
))

app.use(express.json())


// HTTP logger
app.use(morgan('combined'))

// template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'))
// routes
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.get('/search', (req, res) => {
  res.render('search');
})

app.post('/search', (req, res) => {
  res.send('');
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})