const express = require('express')
const {GetPreguntasAdmin, AddPregunta, DeletePregunta} = require('../controllers/preguntas.controller.js')
const {GetSolicitudes, DeleteSolicitud} = require('../controllers/solicitud.controller.js')
const router = express.Router()

router.get('/admin',(req, res)=>{
    try {
        res.status(200).render('../views/admin/form.ejs')
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get('/admin/preguntas', GetPreguntasAdmin)
router.post('/admin/preguntas/:id', DeletePregunta); 
router.get('/admin/solicitudes', GetSolicitudes)
router.post('/admin/solicitudes', AddPregunta)
router.post('/admin/solicitudes/:id', DeleteSolicitud); 



module.exports = router