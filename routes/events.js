/* 
RUTAS DE EVENTOS 
host + /api/events 
*/


const { Router } = require('express')
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events')
const router = Router()
const {validarJWt} = require('../middlewares/validar-jwt')

router.use(validarJWt) // VALIDADOR DE TOKEN

router.get('/', getEvents)

router.post('/', createEvent)

router.put('/:id', updateEvent)

router.delete('/:id', deleteEvent)


module.exports = router
