// Crea un array vuoto
// Chiedi per 6 volte all’utente di inserire un numero
// Se il numero è dispari inseriscilo nell’array

let numbers = []
let odd = []


for(let i = 0; i < 6; i++){
    numbers.push(parseInt(prompt("inserisci un numero: ")));
    
    if (numbers[i] % 2 === 0) {
        
    } else {
           
           odd.push(numbers[i]);
    }
     
    
}
document.getElementById("result").innerHTML = `i numeri dispari sono: ${odd}`;
console.log("i numeri dispari sono: ", odd);