number = [];


let sum = 0;

while (sum <= 50) {
    let askNumber = prompt('Inserisci un numero');
    number.push(askNumber); 
    sum += askNumber;
}

console.log(number);



// messaggio per chiedere il numero
// se il numero è >= 50 inserire il numero nell'array e stampare il numero
// se il numero è < 50 conservarlo e continuare a chiedere
// dopo aver avuto il secondo numero sommare il primo e il secondo
// se la somma è >= 50 stanpare la somma dei due numeri
// altrimenti continuare a chiedere

