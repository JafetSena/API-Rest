const express = require('express');
const cors = require('cors');
//const { query, validationResult } = require('express-validator'); //Para el query de la peticion
const { check, validationResult } = require('express-validator');  //Check revisa todo (Body, params, headers, etc.)
//const { ResultWithContextImpl } = require('express-validator/src/chain');
const app = express();
app.use(express.json());        //Parsea el JSON que viene en el BODY de la petición
//check('Nombre del campo del JSON en el body')
// const validacion = [
//     check('edad').isNumeric(),
//     check('e-mail').isEmail(),
//     check('edad').custom(value) => {
//         if (value < 18) {throw new Error("Menor de edad");}
//         else {return true;}
//         };
//     ];
// app.post("/alumnos", validacion, (req, res) => {
//     const result = validationResult(req);       //Se guarda en el objeto result todo el resultado de las validaciones
//     if (result.isEmpty()){
//         console.log(req.body);
//         res.json({mensaje : "Respuesta a peticion POST"});
//     }
//     else{
//         res.json(result);
//     }
// });
app.post("/alumnos", [
    check('edad').isNumeric(),
    check('e-mail').isEmail()
    ], (req, res) => {     //Se agrega la validación en medio, si son varias validaciones, se agregan como un arreglo "[]"
    const result = validationResult(req);       //Se guarda en el objeto result todo el resultado de las validaciones
    if (result.isEmpty()){
        console.log(req.body);
        res.json({mensaje : "Respuesta a peticion POST"});
    }
    else{
        res.json(result);
    }
});

app.listen(8081, (req, res) => {
    console.log("Servidor Express escuchando en el puerto 8081");
});