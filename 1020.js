var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var aux = parseInt(lines.shift());

var ano = parseInt(aux / 365);

var mes = parseInt((aux - (ano * 365)) / 30);

var dia = parseInt(aux - (ano * 365) - (mes * 30));

console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dia + " dia(s)");