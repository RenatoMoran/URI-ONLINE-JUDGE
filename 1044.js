var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var line1 = lines.shift().split(' ');

var A = parseInt(line1[0]);
var B = parseInt(line1[1]);

if (A > B) {

    if (A % B === 0)
        console.log("Sao Multiplos");
    else
        console.log("Nao sao Multiplos");

} else {

    if (B % A === 0)
        console.log("Sao Multiplos");
    else
        console.log("Nao sao Multiplos");

}