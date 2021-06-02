/*Desarrolle un algoritmo que permita ingresar la temperatura en grados y
muestre la sensación térmica:*/

/*add*/

exports.Thermal = function grados(num){
    /*Menos de 10 grados: Hace mucho frío*/
    if (num < 10){
        return 'Hace mucho frío'
    /*Entre 10 y 15: Hace poco frío*/
    } else if (num >= 10  && num <= 15){
        return 'Hace poco frío'
    /*16 y 24 grados: Hace una temperatura normal*/
    } else if (num >= 16  && num <= 24){
        return 'Hace una temperatura normal'
    /*25 y 30 grados: Hace poco calor*/
    } else if (num >= 25  && num <= 30){
        return 'Hace poco calor'
    /*Mayor a 30 grados: Hace mucho calor*/
    } else if (num > 30){
        return 'Hace mucho calor'
    }
}