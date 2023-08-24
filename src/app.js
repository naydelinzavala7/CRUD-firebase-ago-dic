const express = require('express')
const path = require('path') //encontrar ruta 
const exphbs = require('express-handlebars')
const morgan = require('morgan')
//para con la variable app utilizar todo lo de express
const app = express()

//Settings puerto en e que estara escuchando, motor de plantillas, etc.
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs'
  }).engine
)
app.set('view engine', '.hbs')

//Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({
  extended: false
}))

//Rutas
app.use(require('./routes/index'))

//Archivos Estaticos
app.use('/public', express.static(path.join(__dirname, 'public')))

module.exports = app