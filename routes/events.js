/* 
RUTAS DE EVENTOS 
host + /api/events 
*/


const { Router } = require('express')
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events')
const router = Router()
const {validarJWt} = require('../middlewares/validar-jwt')
const {check} = require('express-validator')
const {fieldValidator} = require('../middlewares/fieldValidator')
const { isDate } = require('../helpers/isDate')

router.use(validarJWt) // VALIDADOR DE TOKEN

router.get('/', getEvents)

router.post('/',[
    check('title',"Titulo obligatorio").not().isEmpty(), 
    check('start',"Fecha de inicio es obligatorio").custom(isDate), 
    check('end',"Fecha de finalización es obligatorio").custom(isDate), 
    fieldValidator
], createEvent)

router.put('/:id', updateEvent)

router.delete('/:id', deleteEvent)


module.exports = router
