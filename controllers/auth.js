const express = require('express')
const User = require('../models/User')



const createUser = async (req, res = express.response) => {

    const { name, password, email } = req.body

    try {
        const user = new User(req.body)
        await user.save()

        res.status(201).json({
            ok: true,
            msg: "Register",
            name,
            password,
            email
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador"
        })

    }
}

const loginUser = (req, res = express.response) => {

    const { password, email } = req.body

    res.status(201).json({
        ok: true,
        msg: "login",
        email,
        password,
    })
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