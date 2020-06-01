var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var line1 = lines.shift().split(' ');
var c1 = parseInt(line1[0]);
var n1 = parseFloat(line1[1]);
var v1 = parseFloat(line1[2]);

var line2 = lines.shift().split(' ');
var c2 = parseInt(line2[0]);
var n2 = parseFloat(line2[1]);
var v2 = parseFloat(line2[2]);

var resultado = (n1 * v1) + (n2 * v2);

console.log("VALOR A PAGAR: R$ " + resultado.toFixed(2));