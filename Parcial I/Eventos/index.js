const express = require('express');
var cors = require('cors');
var evento = require('events');

const mysql = require('mysql2/promise');

const app = express();
app.use(cors());
//class Saludo extends evento.EventEmitter()
function RealizarEvento(){
    const emisor = new evento.EventEmitter();
    setTimeout(() => emisor.emit('Procesar', 50), 7000);
    setTimeout(() => emisor.emit('Optimizar', 75), 9000);
    setTimeout(() => emisor.emit('Terminar', 100), 12000);
    return emisor;
}

let proc = RealizarEvento();

proc.on('Procesar', (porcentaje)=>{
    console.log(`Llevandose a cabo Procedimiento: ${porcentaje}%`);
});

proc.on('Optimizar', (porcentaje)=>{
    console.log(`Optimizando procedimiento: ${porcentaje}%`);
});

proc.on('Terminar', (porcentaje)=>{
    console.log(`Procedimiento Finalizado: ${porcentaje}%`);
});
// emisor.on('saluda', nombre => {     //Escucha el evento con el método On()
//     console.log(nombre);
// });

// emisor.addListener('saluda', nombre => {       //Escucha el evento por el método AddListener()
//     console.log(nombre);
// })
// emisor.emit('saluda', 'Jafet');     //Emite el evento