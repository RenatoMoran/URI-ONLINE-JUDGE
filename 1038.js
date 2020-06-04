var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var line1 = lines.shift().split(' ');

var cod = parseInt(line1[0]);
var quat = parseInt(line1[1]);

switch (cod) {


    case 1:

        console.log("Total: R$ " + (4.00 * quat).toFixed(2));
        break;

    case 2:
        console.log("Total: R$ " + (4.50 * quat).toFixed(2));
        break;

    case 3:
        console.log("Total: R$ " + (5.00 * quat).toFixed(2));
        break;

    case 4:
        console.log("Total: R$ " + (2.00 * quat).toFixed(2));
        break;

    case 5:
        console.log("Total: R$ " + (1.50 * quat).toFixed(2));
        break;

}