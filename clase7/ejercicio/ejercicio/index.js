// Desarrolle un programa que almacene las siguientes frutas en un arreglo: 
// Manzana, Pera, Uva, Sandía, Banano, Melocotón, Piña, Maracuyá, Mandarina, Mango:
// a. Permitir al usuario ingresar el nombre de una fruta.	
// b. Si la fruta se encuentra en el arreglo, mostrar un mensaje al usuario
// c. Si la fruta no se encuentra en el arreglo, mostrar un mensaje al usuario

const frutas = ['Manzana', 'Pera', 'Uva', 'Sandía', 'Banano', 'Melocotón', 'Piña', 'Maracuyá', 'Mandarina', 'Mango'];
const usuarioFruta = '';

exports.fruta = function(prompt) {
    
    //i es el contador de las posiciones de las frutas dentro del arreglo
    for (i in frutas){
        if (frutas[i] == prompt){
            //si la fruta que escribe el usuario está en alguna posición del arreglo:
            usuarioFruta == true;
            return 'La fruta está dentro del arreglo';

        }else{
            //si la fruta que escribe el usuario NO está en alguna posición del arreglo:
            usuarioFruta == false;
            return 'La fruta NO está dentro del arreglo';
        }
    }
}