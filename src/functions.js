"use strict";
function calculaArea(base, altura) {
    return base * altura;
}
const area = (base, altura) => base * altura;
function somar(...numbers) {
    return numbers.reduce((sum, i) => sum += i);
}
function maiorDeIdade(idade) {
    if (idade >= 18) {
        return idade;
    }
    return 'Não é maior de idade';
}
const maior = maiorDeIdade(18);
