const express = require('express')

const app = express()

//Routes

app.get('/',(req,res) => { 
    res.json({
        ok:true
    })
})

//Listener

app.listen(4000,() => { 
    console.log(`Servidor corriendo en puerto ${4000}`);
 })