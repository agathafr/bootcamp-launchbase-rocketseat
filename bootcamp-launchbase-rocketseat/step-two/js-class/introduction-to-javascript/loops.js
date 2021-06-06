/*
Criar um programa que calcula a média
das turmas de alunos e envia mensagem
do cáculo da média.
*/

const alunosDaTurmaA = [{
    nome: 'Agatha',
    nota: 3
},{
    nome: 'Humberto',
    nota: 5
},{
    nome: 'Thabata',
    nota: 3
},{
    nome: 'Virginia',
    nota: 2
}]

const alunosDaTurmaB = [{
    nome: 'Fabrício',
    nota: 5
},{
    nome: 'Mônica',
    nota: 7
},{
    nome: 'Edgar',
    nota: 10
},{
    nome: 'Pedro',
    nota: 4
}]

function calculaMedia(alunos){
    let soma = 0;
    for(let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }

    const media = soma/alunos.length
    return media
}

const media01 = calculaMedia(alunosDaTurmaA)
const media02 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma){
    if(media>5){
        console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
    }else{
        console.log(`A média da ${turma} foi de ${media}. Vamos estudar mais!`)
    }
}

enviaMensagem(media01, 'turmaA') //parâmetros
enviaMensagem(media02, 'turmaB')

