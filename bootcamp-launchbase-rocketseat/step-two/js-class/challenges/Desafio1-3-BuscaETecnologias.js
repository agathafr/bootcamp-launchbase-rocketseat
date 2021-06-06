/*

Desafio 1-3: Funções e estruturas de repetição
Desafios para fortalecer alguns conceitos, entre eles: Funções e métodos, Estruturas de repetição e Escopos.

*/

/*
Busca por tecnologia
    Baseado no desafio anterior, utilize a mesma lista de usuários construída.

    Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

*/
const usuarios = [{
    nome: 'Agatha',
    tecnologias: ['HTML', 'CSS']
}, {
    nome: 'Denis',
    tecnologias: ['JavaScript', 'CSS']
}, {
    nome: 'Thelma',
    tecnologias: ['HTML', 'Node.js']
}]

/*
Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
 */

function buscaTecnologia() {

    for (let i = 0; i < usuarios.tecnologias.length; i++) {
        if (usuarios.tecnologias[i] == 'CSS') return true
    }
    return false
}
buscaTecnologia()
/*
Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:
*/
for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCss = buscaTecnologia(usuarios[i]);
        if (usuarioTrabalhaComCss) {
            console.log(`${usuarios[i].nome} trabalha com CSS`)
        }

}