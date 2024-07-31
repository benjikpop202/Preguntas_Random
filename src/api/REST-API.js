
const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../')));
app.get('/', (req, res)=>{
  try {
    res.render('../views/index.ejs')
  } catch (error) {
    console.log(error);
  }
})
app.get('/juego', (req, res)=>{
  try {
    res.render('../views/juego.ejs')
  } catch (error) {
    console.log(error);
  }
})
app.get('/almacenar', (req, res)=>{
  try {
    res.render('../views/almacenar.ejs')
  } catch (error) {
    console.log(error);
  }
})

app.listen(port, () => {
  console.log("Escuchando en el puerto:", port, "🚀");
});