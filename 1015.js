var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var line1 = lines.shift().split(' ');
var a1 = parseFloat(line1[0])
var b1 = parseFloat(line1[1])

var line2 = lines.shift().split(' ');
var a2 = parseFloat(line2[0])
var b2 = parseFloat(line2[1])

var distancia = Math.sqrt(Math.pow((a2 - a1), 2) + Math.pow((b2 - b1), 2));

console.log(distancia.toFixed(4));