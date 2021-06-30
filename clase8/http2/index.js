const http = require('http');
const url = require('url')
const hostname = 'localhost';
// este es un pequeño servidor
const port = 3000;
const server = http.createServer((req, res) =>{
    const pathUrl = url.parse(req.url, true)
    //console.log('pathUrl',pathUrl)
    console.log('Nombre es', pathUrl.query.nombre)

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    // res.write('¡Hola Mundo!')
    res.write(`¡Hola ${pathUrl.query.nombre}!`)
    res.end()
})

server.listen(port, hostname, ()=>{
    console.log(`Server runnin at http://${hostname}:${port}`)
})

// localhost:3000/?nombre=Jeareth&text=hola