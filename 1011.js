var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

// printf("VOLUME = %.3lf\n",( raio * raio * raio )* 3.14159 *(4/3.0) );

var a = parseInt(lines.shift());

var resultado = (a * a * a) * 3.14159 * (4 / 3.0);

console.log("VOLUME = " + resultado.toFixed(3));