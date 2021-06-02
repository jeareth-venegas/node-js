/*Desarrolle un programa que le permita leer dos números enteros y muestre la
división del primer número entre el segundo. Recordar que la división entre 0
da un error.*/


function dividir(num1, num2){
    let arg = process.argv.slice(2);
    console.log(arg, 'arg')

    if(num1 == 0 || num2 == 0){
        return '¡Error, no se puede dividir por cero!';
    } else{
        return num1 / num2;
    }
}