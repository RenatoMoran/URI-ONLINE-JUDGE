var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift());
var novosalario = 0;
var reajuste = 0;
var valorreajuste = 0;

if (salario <= 400.00) {

    reajuste = 15;

    novosalario = salario + ((salario * 15) / 100);

    valorreajuste = novosalario - salario;

} else if (salario >= 400.01 && salario <= 800.00) {

    reajuste = 12;

    novosalario = salario + ((salario * 12) / 100);

    valorreajuste = novosalario - salario;

} else if (salario >= 800.01 && salario <= 1200.00) {

    reajuste = 10;

    novosalario = salario + ((salario * 10) / 100);

    valorreajuste = novosalario - salario;

} else if (salario >= 1200.01 && salario <= 2000.00) {

    reajuste = 7;

    novosalario = salario + ((salario * 7) / 100);

    valorreajuste = novosalario - salario;

} else if (salario > 2000.00) {

    reajuste = 4;

    novosalario = salario + ((salario * 4) / 100);

    valorreajuste = novosalario - salario;

}

console.log("Novo salario: " + novosalario.toFixed(2));
console.log("Reajuste ganho: " + valorreajuste.toFixed(2));
console.log("Em percentual: " + reajuste + " %");