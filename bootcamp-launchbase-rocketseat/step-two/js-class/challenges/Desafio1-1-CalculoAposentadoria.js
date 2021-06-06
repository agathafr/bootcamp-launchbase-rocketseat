/*
Desafio 1-1: Primeiros passos com JS
Sobre o desafio: Desafios para fortalecer alguns conceitos, entre eles: Variáveis, Condicionais e Operadores.

Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.
Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)
*/

/*
Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos).
*/
const nome = 'Eduardo'
const sexo = 'Masculino'
const idade = 61
const contribuicao = 34

/*
Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.
    - O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
    - Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
*/

const somaIdadeTempoContribuicao = idade + contribuicao

/*
Com base nas regras acima imprima na tela as mensagens:

    -SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
    -SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
*/ 

if(sexo == 'Feminino' && contribuicao >=30 && somaIdadeTempoContribuicao >= 85){
    console.log(`${nome}, você pode se aposentar!`)
}else if (sexo == 'Masculino' && contribuicao >=35 && somaIdadeTempoContribuicao >= 95){
    console.log(`${nome}, você pode se aposentar!`)
}else{
    console.log(`${nome}, você ainda não pode se aposentar!`)
}

