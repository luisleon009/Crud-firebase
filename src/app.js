const express = require ('express')
const path= require('path')
const exphbs = require('express-handlebars')

const morgan = require()

const app = express()


app.set('port', process.env.PORT || 3000)
app.set('views', path.join(_dirname, 'views'))
app.engine('.hbs', exphbs.create({

    defaultLayout: 'main'
    extname: '.hbs'
    }).engine
)
app.set('view engine', '.hbs')


app.use(morgan('dev'))
app.use(express.urlecoded({
    extended: false
}))

app.use(require('/routes/index'))

app.use('/public', express.static(path.join(__dirname,'public')))

module.exports = app
