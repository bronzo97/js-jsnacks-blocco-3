let number = 0;
let sum = 0;

for (let i = 0; i < 5; i++) {
    number = +prompt('Inserisci un numero');
    sum += number;
}

console.log(sum);