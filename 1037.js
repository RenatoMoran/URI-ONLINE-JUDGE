var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var valor = parseFloat(lines.shift());

if (valor >= 0 && valor <= 25.00000) {

    console.log("Intervalo [0,25]");

} else if (valor > 25.00001 && valor <= 50.00000) {

    console.log("Intervalo (25,50]");

} else if (valor > 50.00001 && valor <= 75.00000) {

    console.log("Intervalo (50,75]");

} else if (valor > 75.00001 && valor <= 100.00000) {

    console.log("Intervalo (75,100]");

} else {

    console.log("Fora de intervalo");

}