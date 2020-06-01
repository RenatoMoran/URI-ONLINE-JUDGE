var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split(" ");

var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());


var abs_a_menos_b = Math.abs(a - b);

var maxAB = ((a + b + abs_a_menos_b) / 2);

var abs_maxab_menos_c = Math.abs(maxAB - c);

var max = ((maxAB + c + abs_maxab_menos_c) / 2);


console.log(max + " eh o maior")