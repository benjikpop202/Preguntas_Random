const express = require('express')
const {GetPreguntasAdmin, AddPregunta, DeletePregunta} = require('../controllers/preguntas.controller.js')
const {GetSolicitudes, DeleteSolicitud, SolicitudNotification} = require('../controllers/solicitud.controller.js')
require('dotenv').config()
const{genereteAccesToken, isAdmin, ValidationToken} = require('../middlewares/autenticacion.js')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.get('/user', (req, res)=>{
    res.render('admin/login.ejs')
})
router.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Verificar el usuario y la contraseña
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASS) {
       const user = {name:username, pass:password}
       const AccesToken = genereteAccesToken(user)
       res.header('authorization', AccesToken).send()
    } else {
      res.status(400).send('Usuario o contraseña incorrectos');
    }
  });
router.get('/admin', SolicitudNotification, ValidationToken)
router.get('/admin/preguntas',GetPreguntasAdmin)
router.post('/admin/preguntas/:id', DeletePregunta); 
router.get('/admin/solicitudes', GetSolicitudes)
router.post('/admin/solicitudes', AddPregunta)
router.post('/admin/solicitudes/:id', DeleteSolicitud); 



module.exports = router