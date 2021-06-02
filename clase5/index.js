// app.js o index.js se puede poner cualquiera de esos nombres
const colors = require('colors/safe')
const args = process.argv.slice(2);
const [nombre = 'Amigo'] = args;
// es lo mismo hacerlo así que hacerlo en la línea 3: const nombre = args[0];
const hora = new Date().getHours();

if (hora >= 6 && hora < 12){
    console.log(colors.green('Buenos días', nombre));
}else if( hora >= 12 && hora < 18){
    console.log(colors.red('Buenas tardes', nombre));
}else {
    console.log(colors.rainbow('Buenas noches', nombre));
}