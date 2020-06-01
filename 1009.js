var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var nome = lines.shift();
var x = parseFloat(lines.shift());
var y = parseFloat(lines.shift());

var resultado = x + (y * 0.15);

console.log("TOTAL = R$ " + resultado.toFixed(2));