var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var valor = parseInt(lines.shift());

var troco = valor;
var cem = parseInt(troco / 100);
var troco = parseInt(troco - (cem * 100));
var cinquenta = parseInt(troco / 50);
var troco = parseInt(troco - (cinquenta * 50));
var vinte = parseInt(troco / 20);
var troco = parseInt(troco - (vinte * 20));
var dez = parseInt(troco / 10);
var troco = parseInt(troco - (dez * 10));
var cinco = parseInt(troco / 5);
var troco = parseInt(troco - (cinco * 5));
var dois = parseInt(troco / 2);
var um = parseInt(troco - (dois * 2));

console.log(valor);
console.log(cem + " nota(s) de R$ 100,00");
console.log(cinquenta + " nota(s) de R$ 50,00");
console.log(vinte + " nota(s) de R$ 20,00");
console.log(dez + " nota(s) de R$ 10,00");
console.log(cinco + " nota(s) de R$ 5,00");
console.log(dois + " nota(s) de R$ 2,00");
console.log(um + " nota(s) de R$ 1,00");