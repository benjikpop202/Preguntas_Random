const express = require('express')
const {GetPreguntasAdmin} = require('../controllers/preguntas.controller.js')
const {GetSolicitudes} = require('../controllers/solicitud.controller.js')
const router = express.Router()

router.get('/admin',(req, res)=>{
    try {
        res.status(200).render('../views/admin/form.ejs')
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.get('/admin/preguntas', GetPreguntasAdmin)
router.get('/admin/solicitudes', GetSolicitudes)


module.exports = router