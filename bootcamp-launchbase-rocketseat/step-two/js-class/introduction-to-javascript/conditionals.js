/*Fazendo cálulos com Javascript*/

//Criar um programa que calcula a média 
//das notas entre os alunos e envia
//mensagem do cáculo da média.

const aluno01 = 'Mayk'
const notaAluno01 = 9.8

const aluno02 = 'Diego'
const notaAluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

const media = (notaAluno01 + notaAluno02 + notaAluno03)/3
console.log(media)

//Se a média for maior que 5 parabenizar a turma.
if(media>5){
    console.log(`A média da turma foi ${media}. Parabéns!`)
}else{
    console.log('A média da turma está abaixo de 5. Vamos estudar mais!')
}

