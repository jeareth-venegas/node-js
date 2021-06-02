// 2.	Transformar en código el pseudocódigo que se muestra a continuación,
// correspondiente al cálculo del volumen de un cilindro dados su altura y diámetro.

console.log('Introduzca el diámetro(d) y la altura(h) en metros')
exports.Code = function calculadora (diametro, altura){
    let resultado = Math.PI * Math.pow(diametro, 2) * altura;
    return resultado;
}
//math.pow es para elevar (numero, numero al que se eleva)