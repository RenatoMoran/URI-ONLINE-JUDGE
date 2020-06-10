var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var N = parseInt(lines.shift());
var i = 0;
var j = 1;

for (i = 1; i <= N; i++) {

    console.log(j + " " + (j + 1) + " " + (j + 2) + " PUM");
    j += 4;

}