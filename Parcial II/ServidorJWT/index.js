import express from 'express';
import * as dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import authRouter from "./rutas/auth.js";

//Implemental la autentificación con una tabla de base de datos
//MySQL Autentificacion
dotenv.config();
const app = express();

app.use(express.json())
    .use('/auth', authRouter)
        .listen(8081, () => {
            console.log(`Servidor Escuchando En El Puerto 8081`)
        })