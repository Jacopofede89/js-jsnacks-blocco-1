const name = prompt("Qual è il tuo nome?");
const list = ["pino", "gino" , "tino", "lino","jacopo"];
let invit = document.querySelector(".invito")

let invitList = false;
for(let i = 0; i < name.length; i++) {
    
    if (name === list[i]) {
        invitList = true;
    }
    
}

if (invitList === true) {
    invit.innerHTML = "Nome presente!"
  console.log('nome trovato');
} else  {
    invit.innerHTML = "Nome non presente!"
  console.log('nome non trovato');
};