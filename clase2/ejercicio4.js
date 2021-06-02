/*Desarrolle un algoritmo que le permita leer un número entero y determine si es
negativo.*/

let arg = process.argv.slice(1);
console.log( process.argv, 'process.argv');

const number = Number(Int(arg[0]));

function numeroEntero(num){
    if (num < 0){
        console.log('Numero negativo');
    } else {
        console.log('Numero positivo');
    }
}
