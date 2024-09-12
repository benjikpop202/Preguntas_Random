const express = require('express')
const {GetPreguntasAdmin, AddPregunta, DeletePregunta} = require('../controllers/preguntas.controller.js')
const {GetSolicitudes, DeleteSolicitud, SolicitudNotification} = require('../controllers/solicitud.controller.js')
const router = express.Router()


router.get('/admin', SolicitudNotification)
router.get('/admin/preguntas', GetPreguntasAdmin)
router.post('/admin/preguntas/:id', DeletePregunta); 
router.get('/admin/solicitudes', GetSolicitudes)
router.post('/admin/solicitudes', AddPregunta)
router.post('/admin/solicitudes/:id', DeleteSolicitud); 



module.exports = router