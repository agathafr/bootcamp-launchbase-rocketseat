/*================================================
    OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras 
        para que a condição final seja verdadeira.
    || "OU" Uma das condições devem ser verdadeiras 
        para que a condição final seja verdadeira.
    !   "NÃO" Nega uma condição   
================================================*/
//operador e
console.log(5==5 && 6==6) // true
console.log(5==5 && 6!=6) // false
console.log(5!=5 && 6!=6) // false

console.log()
//operador ou 
console.log(5==5 || 6==6) // true
console.log(5==5 || 6!=6) // true
console.log(5!=5 || 6!=6) // false

console.log()
//operador não
console.log((!(5!=5)) || (6!=6))

/*DESAFIO 1
verificar se a pessoa é maior de 18 anos
se sim, deixar entrar, se não, bloquear a entrada
se a pessoa tiver 17 anos
avisar para voltar quando fizer 18 anos*/

const idade = 18


if(!(idade >= 18) || idade == 17){ //falso e falso entra no else
    console.log('Entrada bloqueada!')
    console.log('Volte quando completar 18 anos!')
}else {
    console.log('Pode entrar!')
    
}

/*================================================
    OPERADORES ARITMÉTICOS

    *   Multiplicação 
    /   Divisão
    %   Resto da divisão
    +   Adição
    -   Subtração
================================================*/

console.log(2*2) //4
console.log(2/2) //1
console.log(2%1.5) //0.5
console.log(2+2) //4
console.log(2-2) //0