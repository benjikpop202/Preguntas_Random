const express = require('express')
const path = require('path')
const morgan = require('morgan')
const WebRouter = require('./routers/webRutes.routes.js')
const PreguntasRoutes = require('./routers/preguntas.routes.js')

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/')));
app.use(WebRouter)
app.use(PreguntasRoutes)


module.exports = app