const validar = (esq) => {
    let validacionJoi = (req, res, next) => {
        let {error} = esq.validate(req.body, {abortEarly:false});
        console.log(error);
        if (error) {
            let {detalle} = error;
            res.status(422).json({error:detalle});
        }
        else{
            next();
        }
    }
    return validacionJoi;
}
module.exports = validar;