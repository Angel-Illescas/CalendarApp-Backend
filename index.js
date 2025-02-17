const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config()
const cors = require('cors')

//console.log(process.env);

const app = express()

//Base de datos

dbConnection()

//Lectura and parseo

app.use(express.json())

//CORS
app.use(cors())

// Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

//Directorio Public


app.use(express.static('public'));



//Listener

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
})