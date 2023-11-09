const express = require("express")

app = express();
app.use(express.json())

app.get("/alumnos", async (req, res) => {
    res.json({message: "Api de Spotify"})
});

async function ObtenerToken() {
    const clienteID = "92236438bdde4b678e48998b253968c0"
    const Secret = "5ea8f648f5b84bc9893df29bacc521ef"
    const tokenURL = "https://accounts.spotify.com/api/token"
    const resp = await fetch(tokenURL, {
        method : "POST",
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded",
            "Authorization" : `Basic ${btoa(`${clienteID}:${Secret}`)}`
        },
        body : `grant_type=client_credentials`
    });
    const data = await resp.json();
    return data.access_token;
}

app.post("/alumnos", async (req, res) => {
    const token = await ObtenerToken();
    const url = `https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q`;
    const response = await fetch(url, {
        headers : {
            "Authorization" : `Bearer ${token}`
        }
    });
    // if(response.ok){
        data = await response.json();
        res.json(data);
    // }
})

app.listen(8081, () => {
    console.log("Servidor express escuchando el puerto 8081");
})

