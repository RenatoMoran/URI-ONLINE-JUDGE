var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var t = parseInt(lines.shift());
var v = parseInt(lines.shift());

console.log(((t * v) / 12).toFixed(3));