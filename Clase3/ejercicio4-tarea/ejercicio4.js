/*En grupos. Desarrollo un programa que lea una opción y luego dos números,
posteriormente según sea la opción realizar alguna de estas operaciones:
- 1. Para sumar dos números
- 2. Para multiplicar dos números
- 3. Para dividir dos números, recuerda que la divión entre 0 da error
- 4. Para restar dos números
- Usar module.export*/ 

/*add*/

exports.Program = function calculadora (operation){
    let a = 12;
    let b = 10;

    if (operation == '+') {
        return operation = a + b;

    } else if (operation == '*'){
        return operation= a * b;

    } else if (operation == '/'){
        if (a == 0 || b == 0){
            return 'Error';
        }else{
            return operation = a / b;
        }
    }else if (operation == '-') {
        return operation = a - b;
    }
}