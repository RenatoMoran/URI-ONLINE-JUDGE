var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

var renda = parseFloat(lines.shift());
var valor = 0;
var ajuda = 0;

if (renda <= 2000.00) {

    console.log("Isento");

} else {

    if (renda > 4500.00) {

        ajuda = renda - 4500.00;

        valor += ((ajuda * 28) / 100);

        ajuda = 0;

        renda -= (renda - 4500.00);

    }

    if (renda >= 3000.01 && renda <= 4500.00) {

        ajuda = renda - 3000.00;

        valor += ((ajuda * 18) / 100);

        ajuda = 0;

        renda -= (renda - 3000.00);

    }

    if (renda >= 2000.01 && renda <= 3000.00) {

        ajuda = renda - 2000.00;

        valor += ((ajuda * 8) / 100);

        ajuda = 0;

    }


    console.log("R$ " + valor.toFixed(2));

}