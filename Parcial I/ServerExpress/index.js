const express = require('express');
//var cors = require('cors')
const app = express();

app.use(express.json());        //Procesa el JSON que viene en el Body de ThunderClient
//app.use(cors());
app.get("/alumnos", (req, res) => {        //:carrera = variable/parametro
    // console.log(req.params);        //Parametro de ruta
    // console.log(req.query);         //Parametro de query - ThunderClient
    // console.log(req.body);          //Parametro de body - ThunderClient
    res.send("Servidor Express contestando a peticion GET");
    //res.json({"msg": 'This is CORS-enabled for all origins!'})
    // res.jsonp({"respuesta": "contestando una peticion con JSON con Padding"});
});

app.post("/alumnos", (req, res) => {
    res.send("Servidor Express contestando a peticion POST");
});

app.listen(8080, (req, res) => {
    console.log("Servidor Express escuchando");
});