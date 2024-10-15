const {express} = require('express')

const getEvents = async (req, res = express.response) => {
    res.status(201).json({
            ok: true,
            msg: "getEvent",
        })
}
const createEvent = async (req, res = express.response) => {

    //Verificar que tengo evento

    console.log(req.body);

    res.status(201).json({
            ok: true,
            msg: "createEvent",
        })
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