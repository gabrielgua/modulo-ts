"use strict";
const alunos = [
    { nome: 'Carlos', cursos: ['Frontend', 'UX/UI'], idade: 26 },
    { nome: 'Ana', cursos: ['Backend', 'Python'], idade: 23 },
];
const julia = {
    nome: 'Júlia',
    idade: 21
};
const gabriel = {
    nome: 'Gabriel',
    idade: 22,
    cursos: ['Java', 'Spring']
};
alunos.push(julia);
function printAluno(aluno) {
    var _a;
    console.log(`${aluno.nome}, ${aluno.idade} - [${((_a = aluno.cursos) === null || _a === void 0 ? void 0 : _a.length) ? aluno.cursos : 'Não possui cursos.'}]`);
}
printAluno(julia);
printAluno(gabriel);
