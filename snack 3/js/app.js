let n = [];

for(let i = 0; i < 5; i++) {
    let askNumber = prompt('inserisci un numero');
    n.push(askNumber);
    let m = n += n;
}

console.log(m)