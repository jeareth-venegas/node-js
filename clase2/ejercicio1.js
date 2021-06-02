/*Desarrolle un programa en RELP que, dado un número entero positivo, calcule
y muestre su factorial. El factorial de un número se obtiene multiplicando todos
los números enteros positivos que hay entre el 1 y ese número. El factorial de 0
es 1.*/

function factorial(number){
  let respuesta = 1;
  for (let i = 1; i <= number; i++){
      respuesta = respuesta *= i;
      }
  return respuesta;
}
