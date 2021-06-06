/*
Criar um programa que calcula a média
das turmas de alunos e envia mensagem
do cáculo da média.
*/

const alunosDaTurmaA = [{
    nome: 'Agatha',
    nota: 8
},{
    nome: 'Humberto',
    nota: 9
},{
    nome: 'Thabata',
    nota: 3
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
}]

function calculaMedia(alunos){
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3
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