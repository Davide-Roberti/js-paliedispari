
// chiedo all'utente di inserire un nome e lo definisco come variabile
// creo una funzione che ordini le lettere della stringa del nome inserito dall'utente al contrario
// tramite un if comparo il nome inserito dall'utente con quello ribaltato
// se i due nomi risultano uguali restituisco true, altrimenti restituisco false
// tremite un if fuori falla funzione: se true visualizzo a schermo che il nome inserito è palindromo, se false visualizzo che non lo è

var nomeInserito = prompt('inserisci un nome per scoprire se è palindromo');


function palindromo()  {
    function reverseString(str) {
        return str.split("").reverse().join(""); //duplico la stringa aeparandola in un array di sottostringhe, ribalto l'array con reverse e lo riunisco con join
    }
    var nomeContrario = reverseString(nomeInserito)
    if (nomeInserito === nomeContrario) {
        return true;
    } else {
        return false;
    }
}

if (palindromo(true)) {
    console.log(nomeInserito + ' è palindromo');
} else {
    console.log(nomeInserito + ' non è palindromo');
}
