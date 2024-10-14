const express = require('express');
require('dotenv').config()

//console.log(process.env);

const app = express()

//Lectura and parseo

app.use(express.json())

//

app.use('/api/auth', require('./routes/auth'))

//Directorio Public


app.use(express.static('public'));



//Listener

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})