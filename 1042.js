var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var line1 = lines.shift().split(' ');

var A1 = parseInt(line1[0]);
var A2 = parseInt(line1[1]);
var A3 = parseInt(line1[2]);

if (A1 < A2 && A1 < 3) {

    if (A2 < A3) {

        console.log(A1);
        console.log(A2);
        console.log(A3);

    } else {

        console.log(A1);
        console.log(A3);
        console.log(A2);

    }

} else if (A2 < A1 && A2 < A3) {

    if (A1 < A3) {

        console.log(A2);
        console.log(A1);
        console.log(A3);

    } else {

        console.log(A2);
        console.log(A3);
        console.log(A1);

    }

} else {

    if (A2 < A1) {

        console.log(A3);
        console.log(A2);
        console.log(A1);

    } else {

        console.log(A3);
        console.log(A1);
        console.log(A2);

    }


}

console.log();

console.log(A1);
console.log(A2);
console.log(A3);