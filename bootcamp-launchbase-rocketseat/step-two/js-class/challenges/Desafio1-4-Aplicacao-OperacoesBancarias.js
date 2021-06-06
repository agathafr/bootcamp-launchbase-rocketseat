//Desafio 1-4: Aplicação: Operações bancárias

const user = {
    name: 'Agatha',
    transactions: [],
    balance: 0
}

//Object transaction
const dataTransaction = [{
    type: 'debit',
    value: 50.5
}, {
    type: 'credit',
    value: 30
}, {
    type: 'debit',
    value: 10
}, {
    type: 'credit',
    value: 100
}]

function createTransaction(transaction) {
    let sum = 0
    for (let i = 0; i < transaction.length; i++) {
        if (transaction[i].type == 'credit') {
            user.transactions.push(`type: ${transaction[i].type}, value: ${transaction[i].value}`)
            sum = sum + transaction[i].value
            return user.balance = sum
        } else {
            user.transactions.push(`type: ${transaction[i].type}, value: ${transaction[i].value}`)
            sum = sum - transaction[i].value
            return user.balance = sum
        }
    }
}

createTransaction(dataTransaction)
console.log(user)

// function getHigherTransactionByType(typeTransaction) {
//     let aux = 0
//     for (let i = 0; i < typeTransaction.length; i++) {
//         for (let j = 0; j < typeTransaction.length; j++) {
//             if (typeTransaction[i].type == 'debit'){
//                 if (typeTransaction[i].value > typeTransaction[j].value){
//                     aux = typeTransaction[i].value
                    
//                 }
//             }
                
//         }
//     }
//     return aux
// }
// const higherTransaction = getHigherTransactionByType(dataTransaction)
// console.log(higherTransaction)

