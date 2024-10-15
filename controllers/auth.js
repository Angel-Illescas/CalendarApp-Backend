const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { generarJWT } = require('../helpers/jwt')


const createUser = async (req, res = express.response) => {

    const { password, email } = req.body

    try {

        let user = await User.findOne({email})

        if (user){
            return res.status(400).json({
                ok: false,
                msg: "El usuario ya existe con el correo"
            })
        }

         user = new User(req.body)

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt)

        //Generar JWT
        const token = await generarJWT( user.id, user.name )

        await user.save()

        res.status(201).json({
            ok: true,
            msg: "Register",
            uid: user.id,
            name: user.name,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })

    }
}

const loginUser = async (req, res = express.response) => {

    const { password, email } = req.body

    try {
        let user = await User.findOne({email})

        if (!user){
            return res.status(400).json({
                ok: false,
                msg: "El usuario es incorrecto; contraseña o email incorrecto"
            })
        }

        //Confirmar password

        const validPassword = bcrypt.compareSync(password, user.password)

        if (!validPassword){
            return res.status(400).json({
                ok:false,
                msg:"Password incorrecto"
            })
        }

        // Generar JWT

        const token = await generarJWT( user.id, user.name )



        res.json({
            ok:true,
            uid:user.id,
            name:user.name,
            token
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })
    }

}

const renewToken = (req, res = express.response) => {
    res.json({
        ok: true,
        msg: "renew",
    })
}

module.exports = {
    createUser, loginUser, renewToken,
}