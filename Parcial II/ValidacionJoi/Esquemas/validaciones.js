const joi = require('joi');

module.exports = {
    esquema : joi.object({
        "nombre" : joi.string().min(2).max(40).required(),
        "apellido" : joi.string().min(2).max(40).required(),
        "edad" : joi.number().integer().min(1).max(99).required(),
        "e-mail" : joi.string().email().required()
    })
}