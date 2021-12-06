function userCard (number){
 let Card = {balance:100,transactionLimit:100,historyLogs:[],key:number}
    return {
        getCardOptions :() => Card,
        putCredits : (kreditPlus) => {
            Card.balance = Card.balance+kreditPlus
        },
        takeCredits : (kreditMinus) => {
            if (Card.balance && Card.transactionLimit >= kreditMinus ){
            Card.balance = Card.balance - kreditMinus}
            else {
                console.log('недостатньо залишку')
            }
        },
        setTransactionLimit : (limit) => {
            Card.transactionLimit = limit
        },
        transferCredits : (kreditGive) => {
            if (Card.balance && Card.transactionLimit >= kreditGive) {
                Card.balance = Card.balance - kreditGive
            } else {
                console.log('недостатньо залишку')
            }
        }

    }

}

let userCard1 = userCard(1);
console.log(userCard1);
userCard1.putCredits(150)
userCard1.takeCredits(100)
userCard1.setTransactionLimit(500)

console.log(userCard1.getCardOptions());













