//Escribir una aplicación en node.js (Usar módulos) que recibirá 20 números enteros positivos,
// y la aplicación deberá mostrar: 
// 1. El número mayor de la lista de números recibidos.
// 2. El número menor de la lista recibida.
// 3. La sumatoria de todos los números recibidos.
// 4. Devolver la lista ordenada de menor a mayor los números. sort()
// Nota: Usar módulos y cada item debe ser una función. El código debe venir con documentación.

let arg = process.argv.slice(2);
console.log( process.argv, 'process.argv');

const numbers = require('./app.js');
//const numbersarr = []Math.random;
const numbersarr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log( numbers.Application(numbersarr));