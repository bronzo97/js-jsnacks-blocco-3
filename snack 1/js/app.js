let numbers = [];
let sum = 0;

// numbers.push(askNumber);



    let askNumber = +prompt('scrivi un numero');
    console.log(askNumber);

while (askNumber <= 50) {
    console.log('number not big enough');
    askNumber = +prompt('aggiungi un altro numero a quello precedente');
}


// do {
//     let askNumber = +prompt('Scrivi un numero');

// }
// while (sum <= 50) {
//     sum += askNumber;
// }





// messaggio per chiedere il numero
// se il numero è >= 50 inserire il numero nell'array e stampare il numero
// se il numero è < 50 conservarlo e continuare a chiedere
// dopo aver avuto il secondo numero sommare il primo e il secondo
// se la somma è >= 50 stanpare la somma dei due numeri
// altrimenti continuare a chiedere