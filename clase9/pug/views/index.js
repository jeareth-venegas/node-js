const express = require('express');
const app = express();
const path = require('path');

app.set('view-engine', 'pug');
app.set('views', path.join(__dirname,"views"));

app.get('/', (req, res) => {
    res.render('index'); //llama y renderiza el index.pug
})

app.get('/about', (req, res) => {
    res.render('about',{title:'About', message:'Estás viendo la página de About'});
})

app.listen(3501);