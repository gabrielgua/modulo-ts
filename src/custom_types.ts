type Aluno = {
    nome: string,
    idade: number,
    cursos?: string[],
}

const alunos: Aluno[] = [
    { nome: 'Carlos', cursos: ['Frontend', 'UX/UI'], idade: 26},
    { nome: 'Ana', cursos: ['Backend', 'Python'], idade: 23},
]

const julia: Aluno = {
    nome: 'Júlia',
    idade: 21
}

const gabriel: Aluno = {
    nome: 'Gabriel',
    idade: 22,
    cursos: ['Java', 'Spring']
}

alunos.push(julia);

function printAluno(aluno: Aluno) {
    console.log(`${aluno.nome}, ${aluno.idade} - [${aluno.cursos?.length ? aluno.cursos : 'Não possui cursos.'}]`);
}

printAluno(julia);
printAluno(gabriel);
