const alunosDaTurmaA = [{
    nome: 'Agatha',
    nota: 3
}, {
    nome: 'Humberto',
    nota: 5
}, {
    nome: 'Thabata',
    nota: 3
}, {
    nome: 'Virginia',
    nota: 2
}]

const alunosDaTurmaB = [{
    nome: 'Fabrício',
    nota: 5
}, {
    nome: 'Mônica',
    nota: 7
}, {
    nome: 'Edgar',
    nota: 10
}, {
    nome: 'Pedro',
    nota: 4
}]

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }
}

function enviaMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`${aluno.nome} foi reprovado(a).`)
    }
}

function alunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviaMensagemReprovado(aluno)
    }
}

alunoReprovado(alunosDaTurmaA)