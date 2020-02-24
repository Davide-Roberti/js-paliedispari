// chiedo all'utente se vuole scommettere su pari o dispari
// chiedo all'utente di inserire un numero tra 1 e 5
// faccio generare all'AI un numero random tra 1 e 5
// tramite una funzione sommo i due numeri e controllo che la somme sia pari o dispari e la scelta dell'utente e ritorno una risposta a schermo

var scommessaUtente = prompt('scrivi se scommetti su pari o dispari');
var numeroUtente = parseInt(prompt('inserisci un numero da 1 a 5'));
var numeroRandom = Math.floor(Math.random() * 5) + 1;

console.log('hai scelto ' + scommessaUtente + ' con numero ' + numeroUtente);
console.log('l\' intelligenza artificiale ha scelto ' + numeroRandom);

if (pariDispari(true)) {
    console.log('complimenti, hai vinto!');
} else {
    console.log('mi dispiace, hai perso!');
}

function pariDispari () {
    var sommaNumeri = numeroUtente + numeroRandom;
    console.log(sommaNumeri);
    if ((scommessaUtente.toLowerCase() === 'pari' && sommaNumeri % 2 == 0) || (scommessaUtente.toLowerCase() === 'dispari' && sommaNumeri % 2 == 1)) {
        return true;
    } else {
        return false;
    }
}
