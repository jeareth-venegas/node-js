//2.Leer el archivo disney_movies.txt, el resultado que se debe mostrar en pantalla
// es como el siguiente ejemplo: 
// Película: Snow White and the Seven Dwarfs
// Año: 1937-12-21
// Género: Musical 

const fs = require('fs')
let path = process.cwd();
const movies = []
// const data = JSON.stringify(movies);

fs.readFile(`${path}/disney_movies.txt`, "UTF8", function(err, movies){
    if(err)
        return console.error(err)

    const convertidor = movies.split(/\r?\n/);

    for (i in convertidor) {
        let pelicula = convertidor[i].split(';');
        fs.appendFile('disney_list.txt', `Movie: ${pelicula[0]}\nRelease Date: ${pelicula[1]}\nGenre: ${pelicula[2]}\n \n`, function (err) {
            if (err)
                return console.error(err)
        });
    }
});