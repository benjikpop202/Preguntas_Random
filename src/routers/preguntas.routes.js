const express = require('express')
const {GetPreguntas, AddPregunta} = require('../controllers/preguntas.controller.js')
const router = express.Router()

router.get('/preguntas',GetPreguntas)
router.get('/pregunta')
router.post('/almacenar', AddPregunta)
router.patch('/pregunta')
router.delete('/pregunta')

module.exports = router