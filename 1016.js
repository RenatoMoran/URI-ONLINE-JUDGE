var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var min = parseInt(lines.shift());

console.log(min * 2 + " minutos");