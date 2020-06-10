var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var N = parseInt(lines.shift());
var i = parseInt(lines.shift());

for (i = 1; i <= 10; i++)
    console.log(i + " x " + N + " = " + i * N);