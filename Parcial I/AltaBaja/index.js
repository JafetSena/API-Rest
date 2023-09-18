const express = require('express');
// const morgan = require('morgan');
// const fs = require('fs');
// const path = require('path');
//const mysql = require('mysql');
const mysql = require('mysql2/promise');

const app = express();
app.use(express.json());        //Procesa el JSON que viene en el Body de ThunderClient
// app.get("/alumnos", (req, res) => {        
//     res.jsonp({"respuesta": "contestando una peticion con JSON con Padding"});
// });

// app.post("/alumnos", (req, res) => {
//     res.send("Servidor Express contestando a peticion POST");
// });


app.get("/alumnos", async (req, res) => {           //CONSULTA GENERAL
    const conn = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'root', database: "test" });
    const [rows, fields] = await conn.query('SELECT * FROM Estudiante');

    res.json(rows);
});

app.get("/alumnos/:id", async (req, res) => {       //CONSULTA ESPECÍFICA
    try {
        console.log(req.params.id);
        const conn = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'root', database: "test" });
        const [rows, fields] = await conn.query('SELECT * FROM Estudiante WHERE id_estudiante = '+ req.params.id);
        if (rows.length==0){
            res.status(404).json({mensaje : 'El estudiante no existe'});
        } else {
            res.json(rows);
        }   
    }
    catch{
        res.status(500).json({mensaje : 'Error de conexión'});
    }
});

app.delete("/alumnos", async (req, res) => {        //BAJA
    try {
        console.log(req.query);
        const conn = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'root', database: 'test' });
        const [rows, fields] = await conn.query('DELETE FROM Estudiante WHERE id_estudiante = '+ req.query.id_estudiante);
        if (rows.affectedRows != 0){
            res.json({mensaje: "Registro Eliminado Exitosamente."});
        }
        else{
            res.json({mensaje: "Registro No Eliminado, Revise el parametro ingresado."});
        }
        // res.json({mensaje: "Peticion Delete"});
    }
    catch{
        res.status(500).json({mensaje : 'Error de conexión'});
    }
});

app.post("/alumnos", async (req, res) => {
    try{
        let sent = `Insert Into Estudiante(id_estudiante, nombre, apellido_paterno, apellido_materno, semestre) Values(${req.body.id_estudiante}, '${req.body.nombre}', '${req.body.apellido_paterno}', '${req.body.apellido_materno}', ${req.body.semestre} )`;
        const conn = await mysql.createConnection({ host:'localhost', user: 'root', password: 'root', database: 'test' })
        console.log(sent);
        const [rows, fields] = await conn.query(sent);
        if (rows.affectedRows != 0){
            res.json({ mensaje : "Estudiante Insertado Correctamente"});
        }
        else{
            res.json({mensaje : "Estudiante No Insertado"});
        }
    }
    catch{
        res.status(500).json({mensaje : "Error de conexión"});
    }
});

app.patch("/alumnos", async (req, res) => {
    try{
        const conn = await mysql.createConnection({ host:'localhost', user: 'root', password: 'root', database: 'test' })
        console.log(req.query)
        
        let objeto = req.body;
        let campos = Object.keys(objeto);
        let sentencia = "UPDATE Estudiante SET ";
        let columnas = "";
        let condicion = `where id_estudiante = ${req.query.id_estudiante}`;
        campos.forEach(columna => {
            // if (columna == "id_estudiante") {
            //     condicion += objeto[columna];
            // }
            if (Number.isInteger(objeto[columna])){
                columnas += `${columna} = ${objeto[columna]} ,`;
            }
            else {
                columnas += `${columna} = '${objeto[columna]}' ,`;
            }
        });
        let correccion = columnas.split(',').join(',').slice(0, columnas.length - 1);
        sentencia += correccion + condicion;
        console.log(sentencia);
        const [rows, fields] = await conn.query(sentencia);
        if (rows.affectedRows != 0){
            res.json({ mensaje : "Estudiante Actualizado Correctamente"});
        }
        else{
            res.json({mensaje : "Estudiante No Actualizado"});
        }
    }
    catch{
        res.status(500).json({mensaje : "Error de conexión"});
    }
});

app.listen(8081, (req, res) => {
    console.log("Servidor Express escuchando");
});