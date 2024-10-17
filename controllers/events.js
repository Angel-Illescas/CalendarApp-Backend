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
    res.status(201).json({
            ok: true,
            msg: "updateEvent",
        })
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