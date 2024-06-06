function calculaArea(base: number, altura: number): number {
    return base * altura;
}

const area = (base: number, altura: number): number => base * altura;

function somar(...numbers: number[]): number {
    return numbers.reduce((sum, i) => sum += i);
}

function maiorDeIdade(idade: number): string | number {
    if (idade >= 18) {
        return idade;
    }

    return 'Não é maior de idade';
}

const maior = maiorDeIdade(18);