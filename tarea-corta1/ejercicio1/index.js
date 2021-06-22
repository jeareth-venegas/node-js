//Trabajo en parejas: Gabriela Vargas y Jeareth Venegas
//1.Guardar la siguiente información en un archivo de texto,
// la información debe almacenarse separada por comas(,):
const fs = require("fs");
let path = process.cwd();
// const data = JSON.stringify(personas);

let personas = ["Nombre", "Apellido", "Edad", "Oliver", "Brown", 20, "Jack", "Murphy", 35, "Charlie", "Rodriguez", 38, "George", "Smith", 22, "James", "Anderson", 23, "William", "Walsh", 25];

for (let i = 0; i < personas.length; i+=3) {
    fs.appendFile(`${path}/personas.txt`, `${personas[i]}, ${personas[i+1]}, ${personas[i+2]}\n`, function(err, data){
        if(err)
            return console.error(err);
        console.log("Archivo creado y salvado");
    })
}
