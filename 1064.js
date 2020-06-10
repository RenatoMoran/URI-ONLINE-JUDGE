var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var valor = [];

valor[0] = parseFloat(lines.shift());
valor[1] = parseFloat(lines.shift());
valor[2] = parseFloat(lines.shift());
valor[3] = parseFloat(lines.shift());
valor[4] = parseFloat(lines.shift());
valor[5] = parseFloat(lines.shift());

var media = 0;
var i = 0;
var positivos = 0;

while (i < 6) {
  if (valor[i] > 0) {
    positivos++;
    media = media + valor[i];
  }
  i++;
}

media = media / positivos;

console.log(positivos + " valores positivos");
console.log(media.toFixed(1));
