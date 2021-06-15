// fs.open(path,flags,[mode])
const fs = require('fs')
let path = process.cwd();

const user = {
    "id": 1,
    "name": "Jeareth",
    "age": 21
};

console.log(path);

const data = JSON.stringify(user);

fs.writeFile(`${path}/holamundo.json`, data, function(err, data){
//el if o el else se puede dejar sin llaves mientras se ejecute
//una sola línea de código, no más de eso.
    if(err)
        return console.error(err);
    console.log('Archivo creado y salvado');
});

// crear si no existe, y si existe agrega el 
// contenido al final
// "\n" agrega un salto de linea en los archivos
fs.appendFile(`${path}/holamundo.txt`, "Hola mundo \ny Jea", function(err, data){
    if(err)
        return console.error(err);
    console.log('Se ha actualizado el archivo');
});

//leer
fs.readFile(`${path}/holamundo.txt`, 'utf8', function(err, data){
    if(err)
        return console.error(err);
    console.log(JSON.stringify(data));
});

//abrir archivo

fs.openFile(`${path}/nuevoarchivo.txt`, 'w', function(err, data){
    if(err)
        return console.error(err);
        //fd es "file description"
    fs.write(fd, 'Esta s mi primera línea', 'utf8', function(err){
        if(err)
        return console.error(err);
    })
});

//borrar archivo

fs.unlink(`${path}/nuevoarchivo.txt`, 'w', function(err){
    if(err)
        return console.error(err);
    console.log('Se ha eliminado el archivo');
})
