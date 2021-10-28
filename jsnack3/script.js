// // il sosoftware deve chiedere per 10 volte di inserire un numero
// // il programma stampa la somma dei numeri


let numbers = []
let sum = 0;

for(let i = 0; i < 10; i++){
    numbers.push(parseInt(prompt("inserisci un numero: ")));
    sum += numbers[i];
    
}
document.getElementById("result").innerHTML = `il risultato è: ${sum}`;
console.log("il risultato è: ", sum);

