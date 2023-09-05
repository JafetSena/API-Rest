let http = require('http');

let servidor = http.createServer(function(req, res){    //Req = Un objeto request, Res = Un objeto response
    res.setHeader("access-Control-Allow-Origin", "*");   //Con esto, permite hacerle un fetch desde el otro servidor (localhost:80 - waamp) o el liveServer (Puerto 5500)
    res.write('Servidor HTTP contestando');
    res.end();
});

servidor.listen(8080, ()=>{
    console.log("Servidor Node-Http escuchando un puerto 8080")
});