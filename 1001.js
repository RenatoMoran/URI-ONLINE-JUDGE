var input = require("fs").readFileSync("stdin", "utf-8");
var linhas = input.split(" ");

var a = parseInt(linhas.shift());
var b = parseInt(linhas.shift());

console.log("X = " + (a + b));
