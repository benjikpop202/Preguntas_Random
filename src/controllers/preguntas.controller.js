const PreguntasDB = require('../models/preguntas.js')

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
        const NewPregunta = new PreguntasDB({
            pregunta: pregunta,
            opcion1: opcion1,
            opcion2: opcion2,
            opcion3: opcion3,
            respuesta:respuesta
        })
        await NewPregunta.save()
        res.status(200).redirect('/almacenar')
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {GetPreguntas, AddPregunta}

