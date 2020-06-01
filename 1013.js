var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var x = parseInt(lines.shift());
var y = parseFloat(lines.shift());

var comsumo = x / y;

console.log(comsumo.toFixed(3) + " km/l");