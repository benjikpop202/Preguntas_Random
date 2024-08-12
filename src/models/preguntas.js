const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PreguntasSchema = new Schema({
 pregunta: {type: String},
 opcion1: {type: String},
 opcion2: {type: String},
 opcion3: {type: String},
 respuesta: {type: String, enum:['A', 'B', 'C']}
})

const Preguntas = mongoose.model('preguntas', PreguntasSchema)
module.exports = Preguntas