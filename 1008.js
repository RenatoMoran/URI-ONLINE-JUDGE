var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseFloat(lines.shift());

console.log("NUMBER = " + a);
console.log("SALARY = U$ " + (b * c).toFixed(2));