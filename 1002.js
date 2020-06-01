var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split(" ");

var n = 3.14159;
var raio = parseFloat(lines.shift());
var area = n * (raio * raio);

console.log('A=' + area.toFixed(4));