// Mail :
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// ESECUZIONE

// Creo l' array delle mail

const mailVerified = [
  "bianco@mail.it",
  "rosso@mail.it",
  "giallo@mail.it",
  "verde@mail.it",
  "blu@mail.it",
];
console.log(mailVerified);

// Chiedo la mail all'utente

const userMail = prompt("inserisci una mail");
console.log(userMail);

// Controllo mail 

let mailCheck = false;

for (let i = 0; i < mailVerified.length; i++) {
  const mailOk = mailVerified[i];

  if (mailOk === userMail) {
    mailCheck = true;
    console.log(mailCheck);
  } else {
    console.log(mailCheck);
  }
}

if (mailCheck === true) {
  alert("MAIL CORRETTA");
  console.log(mailCheck);
} else {
  alert("MAIL NON AUTORIZZATA");
  console.log(mailCheck);
}
