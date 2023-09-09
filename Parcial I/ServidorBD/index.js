const express = require('express');
// const morgan = require('morgan');
// const fs = require('fs');
// const path = require('path');
//const mysql = require('mysql');
const mysql = require('mysql2/promise');

const app = express();

//var accessLogStream = fs.createWriteStream(path.join(__dirname, 'Peticiones/access.log'), { flags: 'a' });

//app.use(morgan('combined', { stream: accessLogStream }));

// app.get("/alumnos", (req, res) => {        
//     res.jsonp({"respuesta": "contestando una peticion con JSON con Padding"});
// });

// app.post("/alumnos", (req, res) => {
//     res.send("Servidor Express contestando a peticion POST");
// });


app.get("/alumnos", async (req, res) => {
    // var connection = mysql.createConnection({
    //     host:   "localhost",
    //     user:   "root",
    //     password: "root",
    //     database: "test"
    // });
    // connection.connect();
    // connection.query("SELECT 1 + 1 AS Solucion", function(error, results, fields){
    //     if (error) throw error;
    //         console.log("The solution is: ", results[0].solution);

    //         connection.end();
    //         res.json(results);
    // });
    //;
    //mysql.createConnection({ host: 'localhost', user: 'root', password: 'root', database: "test" })
        // .then(conn => conn.query('select 1 + 1 as solucion'))
        //     //.then(([rows, fields]) => console.log(rows[0].foo));
        //     .then(([rows, fields]) => res.json(rows));
    const conn = await mysql.createConnection({ host: 'localhost', user: 'root', password: 'root', database: "test" });
    const [rows, fields] = await conn.query('SELECT * FROM Estudiante');

    res.json(rows);
});

app.get("/alumnos/:id", async (req, res) => {
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

app.listen(8081, (req, res) => {
    console.log("Servidor Express escuchando");
});