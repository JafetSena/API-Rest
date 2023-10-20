const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const opciones = {
    key : fs.readFileSync(path.join(__dirname, "SSL/key.pem")), 
    cert : fs.readFileSync(path.join(__dirname, "SSL/cert.pem"))
}

app = express();
//La llave privada abre el candado, la llave pública cierra el candado (encripta)
app.use(express.json());

app.get("/alumnos", (req, res) => {
    //res.json("Servidor HTTPS GET");
    res.send("Hola Mundo");
});

// app.listen(8081, (req, res) => {
//     console.log("Servidor Express HTTPS escuchando en el puerto 8081");
// });

https.createServer(opciones, app).listen(8081, (req, res) =>{
    console.log("Servidor Express Seguro HTTPS en puerto 8081");
});