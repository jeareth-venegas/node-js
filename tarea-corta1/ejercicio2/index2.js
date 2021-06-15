//2.Leer el archivo disney_movies.txt, el resultado que se debe mostrar en pantalla
// es como el siguiente ejemplo: 
// Película: Snow White and the Seven Dwarfs
// Año: 1937-12-21
// Género: Musical 

const fs = require('fs')
let path = process.cwd();
const movies = []
// const data = JSON.stringify(movies);

fs.readFile(`${path}/disney_movies.txt`, 'utf8', function(err, data){
    if(err)
        return console.error(err);
    // console.log(JSON.stringify(data));
});

const feedLine = movies.split(/\r?\n/)

for(let i = 0; i < feedLine.length; i++){
    let movies = feedLine[i].split(';');

fs.appendFile(`${path}/peliculas.txt`, `Nombre: ${movies[i]}\n, Fecha: ${movies[i+1]}\n, Género:${movies[i+2]}\n \n`, function(err, data){
    if(err)
        return console.error(err);
    console.log("Archivo creado y salvado");
}}