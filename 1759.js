var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var x = parseInt(lines.shift());

for (a = 1; a < x; a++) {
    //console.log("Ho ");
    process.stdout.write("Ho ");
}
console.log("Ho!");