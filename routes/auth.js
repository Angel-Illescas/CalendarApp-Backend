/* 
RUTAS DE USUARIOS / AUTH
host + /api/auth 
*/

const { Router } = require('express')
const router = Router()
const { check } = require('express-validator')
const { createUser, loginUser, renewToken } = require('../controllers/auth')
const {fieldValidator} = require('../middlewares/fieldValidator')

router.post('/new', [
    //coleccion de midleware para validacion
    check('name', 'Nombre obligatorio').not().isEmpty(),
    check('email', 'Email obligatorio').isEmail(),
    check('password', 'Password debe de ser de 6 caracteres').isLength({ min: 6 }),
    fieldValidator
], createUser)

router.post('/', [
    //coleccion de midleware para validacion
    check('email', 'Email obligatorio').isEmail(),
    check('password', 'Password debe de ser de 6 caracteres').isLength({ min: 6 }),
    fieldValidator
], loginUser)

router.get('/renew', renewToken)

module.exports = router;