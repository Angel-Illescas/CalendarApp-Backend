const express = require('express');
require('dotenv').config()

console.log(process.env);

const app = express()

//Directorio Pub

app.use(express.static('public'));

//Routes

app.get('/',(req,res) => { 
    res.json({
        ok:true
    })
})

//Listener

app.listen(process.env.PORT,() => { 
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
 })