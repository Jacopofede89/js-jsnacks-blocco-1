// // inserisci il primo numero
// // inserisci il secondo numero
// // il software stampa il maggiore tra i 2

// iserisci le costanti

const num1 = (parseInt(prompt("Inserisci il primo numero"));
const num2 = (parseInt(prompt("Inserisci il secondo numero"));


let risultato;

// controlla le condizioni

if(num1 >= num2) {
    risultato = num1;
}
else if (num2 >= num1) {
    risultato = num2;
}


// mostra il risultato

console.log("Il numero maggiore è " + risultato);
document.querySelector(".result").innerHTML = `Il numero maggiore è: ${risultato}`



