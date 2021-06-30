const suma = require('./app.js')
let nums = process.argv.slice(2);
console.log(suma.sum(nums[0], nums[1]))

const http = require('http');
const url = require('url')
const hostname = 'localhost';
const port = 6000;
const server = http.createServer((req, res) =>{
    const pathUrl = url.parse(req.url, true)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    const respuesta = suma.sum(nums`${pathUrl.query.numero1}`, nums`${pathUrl.query.numero2}`)
    res.write(`El resultado es: ${pathUrl.query.numero1} ${pathUrl.query.numero2}`)
    res.end()
})

server.listen(port, hostname, ()=>{
    console.log(`Server runnin at http://${hostname}:${port}`)
})