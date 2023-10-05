const { checkSchema } = require('express-validator');

const esquema = checkSchema({
    'nombre' : {isLength: {options: {min:2, max:120}, errorMessage: "No deje vacío el nombre"}},
    'edad'  : {isNumeric: {errorMessage: "La edad debe ser numérica."}},
    'e-mail': {isEmail: {errorMessage: "Correo electrónico incorrecto"}}
});

module.exports.validacion = esquema;