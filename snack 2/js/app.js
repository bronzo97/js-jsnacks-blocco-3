let array = [];
// let n = prompt('Inserisci un numero');

// console.log(n);

for(let i = 0; i < 10; i++) {
    array.push(Math.floor((Math.random()*100)+1));
    console.log(array);
}


const numeroScelto = parseInt(prompt('Inserisci un numero'));
const arrayGenerati = [];

// dobbiamo validare il numero inserito


// finchè la lunghezza di arrayGenerati è minore del numero inserito
// ripeto il ciclo
while (arrayGenerati.length < numeroScelto) {
    // Creo il nuovo array
    const nuovoArray = [];

    // inserisco 10 numeri casuali in ogni array creato
    while (nuovoArray.length < 10) {
        // creo un numero casuale da 1 a 100
        const numeroCasuale = Math.floor(Math.random() * 100) + 1;

        // constrollo che il numero non sia già presene nell'array
        if (!nuovoArray.includes(numeroCasuale)) {
            // se il numero casuale non è già presente nell'array lo aggiungo
            nuovoArray.push(numeroCasuale);
        }
    }

    // aggiunge il nuovo array alla lista degli array generati
    arrayGenerati.push(nuovoArray);
}

