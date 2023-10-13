const express = require('express');
const enrutador = require('./rutas/indexRouter.js');
const app = express();

app.use('/alumnos', enrutador.router);

app.listen(8081, (req, res) => {
    console.log("Servidor Express escuchando en el puerto 8081");
});