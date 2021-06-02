/* Desarrollo un programa que permita leer un número entero positivo, n, y
muestre en pantalla la suma de todos los enteros desde 1 hasta n. La suma de
los n primeros enteros positivos puede ser calculada de la siguiente forma:
suma=n(n+1)/2 */

let arg = process.argv.slice(2);
console.log( process.argv, 'process.argv');

function numeroInt(n){
    if( n > 0){
        for (let i = 0; i < n; i++) {
            return n(n+1)/2;
        }
    } else{
        return 'Por favor introduzca un número entero positivo.'
    }
}