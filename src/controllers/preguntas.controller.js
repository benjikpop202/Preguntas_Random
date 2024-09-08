const Preguntas = require('../models/preguntas.js')
const PreguntasDB = require('../models/preguntas.js')
const SolicitudDB = require('../models/solicitudes.js')

 //usuario
 const GetPreguntas = async (req, res) =>{
    try {
        const preguntasDB = await PreguntasDB.find()
        res.status(200).render('../views/juego.ejs',{
            preguntas: preguntasDB
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

 const AddPregunta = async (req, res)=>{
    const {pregunta, opcion1, opcion2, opcion3, respuesta} = req.body
    try {
        const NewPregunta = await PreguntasDB.create({
            pregunta,
            opcion1,
            opcion2,
            opcion3,
            respuesta
        })
        await NewPregunta.save()
        console.log(NewPregunta);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

//admin

const GetPreguntasAdmin = async (req, res)=>{
    try {
        const preguntasDB = await PreguntasDB.find()
        res.status(200).render('../views/admin/preguntas.ejs',{
            preguntas: preguntasDB
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {GetPreguntas, AddPregunta, GetPreguntasAdmin}

