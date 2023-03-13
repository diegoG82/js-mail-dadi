// Gioco dei dadi:
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// INPUT
// GENERO UN NUMERO RANDOM  SIA PER L'UTENTE CHE PER IL PC

// User
let p1roll =  Math.floor(Math.random() * 6 + 1);
console.log(p1roll);
// PC
let pcroll =  Math.floor(Math.random() * 6 + 1);
console.log(pcroll);

if (p1roll > pcroll){
    alert("Il giocatore ha vinto!");

}else if (p1roll < pcroll){
    alert("il computer ha vinto");

}else{
    alert("Pareggio, tirare di nuovo i dadi!)");
}