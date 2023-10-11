const express = require('express');
const joi = require('joi');
const { esquema } = require('./Esquemas/validaciones.js');
const validacion = require('./Esquemas/FuncValidar.js');
const app = express();
app.use(express.json());
/**
 * Petición POST para insertar datos en el servidor express
 * @param {object} req obtiene el objeto request de la petición en un objeto
 * @param {object} res obtiene el objeto respuesta de la peticion en un objeto
 * @param {object} next funcion MiddleWare que pasa la ejecución a la siguente función del código
 */
app.post("/alumnos", validacion(esquema), (req, res, next) => {
    // const { error, value } = esquema.validarEsquema(req.body);
    // if (typeof error === undefined){
        res.send(req.body.json());
    // //}
    // else{
        console.log("Error en el objeto recibido en el Body");
        res.status(500).json(error);
    // }
})

app.listen(8081, (req, res) => {
    console.log("Servidor Express escuchando en el puerto 8081");
});