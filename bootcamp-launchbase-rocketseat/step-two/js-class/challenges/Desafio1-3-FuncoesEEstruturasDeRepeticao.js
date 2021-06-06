/*
Desafio 1-3: Funções e estruturas de repetição
Desafios para fortalecer alguns conceitos, entre eles: Funções e métodos, Estruturas de repetição e Escopos.
*/

/*
Usuários e tecnologias
    Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

*/

const usuarios = [{
    nome: 'Agatha',
    tecnologias: ['HTML', 'CSS']
},{
    nome: 'Denis',
    tecnologias: ['JavaScript', 'CSS']
},{
    nome:'Thelma',
    tecnologias: ['HTML', 'Node.js']
}]

/*
Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
    Carlos trabalha com HTML, CSS
    Jarmine trabalha com JavaScript, CSS
    Tuane trabalha com HTML, Node.js
*/

for(i=0; i<usuarios.tecnologias.length;i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`)
}