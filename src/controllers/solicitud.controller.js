const PreguntasDB = require('../models/preguntas.js')
const Solicitudes = require('../models/solicitudes.js')
const SolicitudDB = require('../models/solicitudes.js')

const GetSolicitudes = async (req, res)=>{
    try {
        const Solicitudes = await SolicitudDB.find()
        res.status(200).render('../views/admin/solicitudes.ejs',{
            solicitudes: Solicitudes
        })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const AddSolicitud = async (req, res)=>{
    const {pregunta, opcion1, opcion2, opcion3, respuesta} = req.body
    try {
        const NewSolicitud = await SolicitudDB.create({
            pregunta,
            opcion1,
            opcion2,
            opcion3,
            respuesta
        })
        await NewSolicitud.save()
        console.log(NewSolicitud);
        res.status(200).redirect('/almacenar')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const DeleteSolicitud = async (req, res) => {
    const id  = req.params.id;
    try {
        const result = await SolicitudDB.deleteOne({ _id: id });
        if (result.deletedCount > 0) {
            res.status(200).redirect('/admin/solicitudes');
        } else {
            res.status(404).send('Solicitud no encontrada');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const SolicitudNotification = async (req, res)=>{
    try {
        const solicitudes = await SolicitudDB.find()
        res.status(200).render('../views/admin/form.ejs',{
            solicitudesNotification: solicitudes
        })
    } catch (error) {
        
    }
}


module.exports = {GetSolicitudes, AddSolicitud, DeleteSolicitud, SolicitudNotification}