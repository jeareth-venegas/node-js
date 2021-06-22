console.log("process.argv",process.argv)
let program = require('./index');
let [prompt] = process.argv.slice(2);

const print = program.fruta(prompt);
console.log(print);
