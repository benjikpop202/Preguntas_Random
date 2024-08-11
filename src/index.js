const app = require('./App.js')
const connect = require('./data/database.js')
require('dotenv').config()

const port = process.env.PORT || 3000;

async function main() {
  try {
    await connect
    console.log('conexion exitosa a la base de datos');
    app.listen(port, () => {
      console.log("Escuchando en el puerto:", port, "🚀");
    });
  } catch (error) {
    console.log(error);
    
  }
}

main()

