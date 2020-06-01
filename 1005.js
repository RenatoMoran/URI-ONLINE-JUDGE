var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var x = parseFloat(lines.shift());
var y = parseFloat(lines.shift());

var media = ((3.5 * x) + (7.5 * y)) / 11;

console.log("MEDIA = " + media.toFixed(5));