/*
Desafio 1-2: Lidando com objetos e vetores
Desafios para fortalecer alguns conceitos, entre eles: Objetos e Vetores.

Vetores e objetos
    
    [x]Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

    [x]Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

    [x]As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

    { nome: 'C++', especialidade: 'Desktop' }
    { nome: 'Python', especialidade: 'Data Science' }
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }

*/

const programador = {
    nome: 'Agatha',
    idade: 24,
    tecnologias: [{
        nome: 'C++',
        especialidade: 'Desktop',
    },
    {
        nome: 'Python',
        especialidade: 'Data Science'
    },
    {
        nome: 'JavaScript',
        especialidade: 'Web/Mobile'
    }
    ]
}

/*
Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

    []O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
*/

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
