console.log("process.argv",process.argv)
let myargv = process.argv.slice(2);


const calculo = require('./ejercicio3.js');
console.log( calculo.Thermal(13))