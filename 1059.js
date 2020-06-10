var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var i = 0;

for (i = 1; i <= 100; i++) {
    if (i % 2 == 0)
        console.log(i);
}