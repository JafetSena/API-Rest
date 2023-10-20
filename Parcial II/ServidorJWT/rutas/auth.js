import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { Router } from 'express';

const authRouter = Router();

const SECRET = process.env.SECRET_KEY
authRouter
    .use('/privada', verificaToken)
    .get('/', (req, res) => {
        res.json({message: "Ruta desprotegida"})
    })
    .post('/login', (req, res) => {
        try{
            const {user, password} = req.body;
            console.log(`Usuario ${user} intentando ingresar`);
            if (user == 'admin' && password == 'admin'){
                return res.status(201).json({
                    //token: jwt.sign({user: 'admin', password: 'admin'}, 'secreto')
                    token : jwt.sign(req.body, 'secreto')
                })
            }
        }
        catch (err){
            return res.json({error: err.message})
        }
    })
    .get('/privada/login', (req, res) => {
        res.status(200).json({message: "Ruta protegida"})
    })

async function verificaToken(req, res, next) {
    if (!req.headers.authorization) {
        res.status(401).send("Acceso no autorizado.");    //401 No autorizado, no se está enviando el token
    }
    else{
        //Bearer akdlndsad
        console.log(req.headers.authorization);
        var reqToken = req.headers.authorization.split(' ')[1]       //Bearer <Token> | el bearer es la posicion 0 y el token la 1
        //Token sin la palabra Bearer
        console.log(reqToken);
    }
    try{
        jwt.verify(reqToken, 'secreto', (err) => {
            if (err) return res.status(400).json({error: "Token invalido"})
            else {
                next();
            }
        })
    }
    catch (err){
        return res.json({error: err.message})
    }
}

export default authRouter;