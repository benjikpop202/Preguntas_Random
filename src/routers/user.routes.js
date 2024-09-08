const express = require('express')
const {GetPreguntas} = require('../controllers/preguntas.controller.js')
const {AddSolicitud} = require('../controllers/solicitud.controller.js')
const router = express.Router()

router.get('/', (req, res)=>{
    try {
      res.render('index.ejs')
    } catch (error) {
      console.log(error.message);
    }
  })
  router.get('/almacenar', (req, res)=>{
    try {
      res.render('almacenar.ejs')
    } catch (error) {
      console.log(error.message);
    }
  })
router.get('/juego',GetPreguntas)
router.post('/almacenar', AddSolicitud)

module.exports = router