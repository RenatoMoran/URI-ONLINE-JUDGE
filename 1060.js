var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var val = [];

val.push(parseFloat(lines.shift()));
val.push(parseFloat(lines.shift()));
val.push(parseFloat(lines.shift()));
val.push(parseFloat(lines.shift()));
val.push(parseFloat(lines.shift()));
val.push(parseFloat(lines.shift()));

var positivos = 0;

for (i = 0; i < 6; i++) {

    if (val[i] > 0) {
        positivos++;
    }

}

console.log(positivos + " valores positivos");