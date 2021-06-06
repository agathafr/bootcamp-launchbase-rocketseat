/*================================================
    OPERADORES DE COMPARAÇÃO

    >       Maior
    <       Menor
    >=      Maior ou igual a 
    <=      Menor ou igual a
    ==      Igual a 
    ===     Igual e do mesmo tipo
    !=      Diferente de
    !===    Diferente, inclusive do tipo 

================================================*/

//true; false (boolean)
console.log(5>4) // true
console.log(5<4) // false
console.log(5>=4) // true
console.log(4<=4) // true

console.log()

console.log(4=="4") // true
console.log(4==="4") // false
console.log(4!="5") // true
console.log(4!=="5") // true

//DESAFIO 1
const idade = 17
//verificar se a pessoa é maior de 18 anos
console.log(idade >= 18)

//se sim, deixar entrar, se não, bloquear a entrada
if(idade == 18){
    console.log('Pode entrar!')
}
else{
    console.log('Entrada bloqueada!')
}

//se a pessoa tiver 17 anos
//avisar para voltar quando fizer 18 anos
if(idade == 17){
    console.log('Volte quando completar 18 anos!')
}
