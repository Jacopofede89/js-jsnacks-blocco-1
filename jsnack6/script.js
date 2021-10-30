

// creare un Array
const list = [];

// ripeto l'operazione fino a creare 50 numeri[arrey]
while (list.length < 50) {
    
    // generazione numero casuale
    let num = Math.floor(Math.random() * 50) + 1;
    
    // è presente lo stesso numero?
    let numbers = true;
    
        // confronto il nuovo numero generato con quelli presenti [arrey] se trovo è già presente cambio il valore 
        for (i = 0; i < list.length; i ++) {
            if (num === list[i]) {
            numbers = false;
            }
        }
    
    // se il valore non cambia lo aggiungo [arrey]
    if (numbers == true) {
        list.push(num);
    }
}

// stampo il risultato
document.getElementById("stampa").innerHTML=(`La lista di numeri casuali senza duplicati è: ${list}`);