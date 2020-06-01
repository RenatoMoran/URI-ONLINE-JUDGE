var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var n = parseInt(lines.shift());

var h = parseInt(n / 3600);
var m = parseInt((n % 3600) / 60);
var s = parseInt(n % 60);

console.log(h + ":" + m + ":" + s);
