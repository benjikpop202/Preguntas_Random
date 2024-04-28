import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../')));

app.listen(port, () => {
  console.log("Escuchando en el puerto:", port, "🚀");
});