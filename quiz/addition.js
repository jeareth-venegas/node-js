//Escribir una aplicación en node.js (Usar módulos) que recibirá 20 números enteros positivos,
// y la aplicación deberá mostrar: 
// 1. El número mayor de la lista de números recibidos.
// 2. El número menor de la lista recibida.
// 3. La sumatoria de todos los números recibidos.
// 4. Devolver la lista ordenada de menor a mayor los números. sort()
// Nota: Usar módulos y cada item debe ser una función. El código debe venir con documentación.


// Math.random, array.sort(),Math.max() y Math.min(),array.push()

//funcion que recibe informacion de los numeros dentro del array
const plus = 0;
exports.Application = function(array){
    //const array = [].Math.random(20);
    const array = [];
    //suma
    for (let i = 0; i< array.length; i++){
        plus =+ array[i];
    }
    //array.sort()
    //menor a mayor
    array.sort((a, b) => a - b);
    console.log();
    //mayor a menor
    array.sort((a, b) => b - a);
    console.log();
}


// exports.Application = function(array){ let array = [];}
// exports.Application = for (let i = 0; i< array.length; i++) {
// array.forEach(function(arr).Math.random)