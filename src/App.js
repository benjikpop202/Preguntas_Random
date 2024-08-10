const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/')));

app.get('/', (req, res)=>{
    try {
      res.render('index.ejs')
    } catch (error) {
      console.log(error);
    }
  })
  app.get('/juego', (req, res)=>{
    try {
      res.render('juego.ejs')
    } catch (error) {
      console.log(error);
    }
  })
  app.get('/almacenar', (req, res)=>{
    try {
      res.render('almacenar.ejs')
    } catch (error) {
      console.log(error);
    }
  })
module.exports = app