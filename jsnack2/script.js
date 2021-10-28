
// // inserisci la prima parola
// // inserisci la seconda parola
// // il software stampa la parola più corta
// // il software stampa la parola più lunga

const firstWord = prompt("inserisci la prima parola:");
const secondWord = prompt("inserisci la seconda parola:");
// let sentence;

let sentence = document.getElementById("result");

if(firstWord.length > secondWord.length) {
    sentence.innerHTML = secondWord + ' ' + firstWord;
}
else if (firstWord.length < secondWord.length) {
    sentence.innerHTML =  firstWord + ' ' + secondWord;
};



