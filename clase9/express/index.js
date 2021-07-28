const express = require('express');
const path = require('path');
const app = express();

// app.get('/', (req, res) => {
//     res.send('Hola Mundo...');
// })

// app.listen(3501);
// //localhost:3501


//ponemos post en Postman
app.use(express.json());
app.use(express.urlencoded({
	type:'application/x-www-form-urlencoded',
	extended: true,
}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html')); //path.join y dirname me dan la direccion de donde estoy ubicada actualmente
})

app.post('/', (req, res) => {
    console.log(req.body) // trae la información del body que esta en Postman
    res.send('Hola Mundo...');
})
// para poder abrir el about sin que de error
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/about.html'));
})

app.listen(3501);
