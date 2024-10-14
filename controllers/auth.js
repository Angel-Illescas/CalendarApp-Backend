const express = require('express')

const createUser = (req, res = express.response) => {

    const { name, password, email } = req.body
    
    res.status(201).json({
        ok: true,
        msg: "Register",
        name,
        password,
        email
    })
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