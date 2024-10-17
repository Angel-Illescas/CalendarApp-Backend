const {express} = require('express');
const Event = require('../models/Event')

const getEvents = async (req, res = express.response) => {

    const events = await Event.find().populate('user','name')


    res.status(201).json({
            ok: true,
            events,
        })
}
const createEvent = async (req, res = express.response) => {

    //Verificar que tengo evento
    const event = new Event(req.body)

    try {

        event.user = req.uid // asignamos el user id

        const eventSaved = await event.save()
        res.json({
            ok:true,
            event: eventSaved
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"Hable con admin"
        })
    }

}
const updateEvent = async (req, res = express.response) => {

    const eventId = req.params.id
    const uid = req.uid

    try {

        const event = await Event.findById(eventId)
        if(!event){
            res.status(404).json({
                ok:false,
                msg: "Evento no existe por ese Id"
            })
        }

        if (event.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg: "No tiene privilegio de editar"
            })
        }

        const newEvent = {
            ...req.body,
            user:uid
        }

        const updateEvent = await Event.findByIdAndUpdate(eventId, newEvent,{new:true})

        res.json({
            ok:true,
            event : updateEvent
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: "Hable con el admin"
        })
    }


    
}
const deleteEvent = async (req, res = express.response) => {
    res.status(201).json({
            ok: true,
            msg: "deleteEvent",
        })
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}