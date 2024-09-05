const Preguntas = require('../models/preguntas.js')
const PreguntasDB = require('../models/preguntas.js')
const SolicitudDB = require('../models/solicitudes.js')

 const GetPreguntas = async (req, res) =>{
    try {
        const preguntasDB = await PreguntasDB.find()
        res.status(200).render('../views/juego.ejs',{
            preguntas: preguntasDB
        })
    } catch (error) {
        res.status(500).send(error)
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
        res.status(500).send(error)
    }
}

module.exports = {GetPreguntas, AddPregunta}

