var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var N = parseInt(lines.shift());
var fatorial = 1;

for (i = N; i >= 2; i--) {
    fatorial *= i;
}

console.log(fatorial);