const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({respuesta: "Petición GET exitosa"});
})
.post('/', (req, res) => {
    res.status(200).json({respuesta: "Petición POST exitosa"})
})
.patch('/', (req, res) => {
    res.status(200).json({respuesta: "Petición PATCH exitosa"})
})
.put('/', (req, res) => {
    res.status(200).json({respuesta: "Petición PUT exitosa"})
})
.delete('/', (req, res) => {
    res.status(200).json({respuesta: "Petición DELETE exitosa"})
})

module.exports.router = router;