const http = require('http')
// request, response
const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Conten-type': 'text/plain'})
    //'text/html;charset=utf-8'
    res.write('Hola mundo!')
    res.end()
})

server.listen(5000)
console.log('Node.js listening on port 5000')