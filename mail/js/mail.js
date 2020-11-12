// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


var mailUtente = prompt("Inserisci la tua mail");
console.log("La tua mail è " + mailUtente);
document.getElementById('titolo').innerHTML = "La tua mail è " + mailUtente;

var listaMail = ["ciao.1@ciao.com", "ciao.2@ciao.com", "ciao.3@ciao.com", "ciao.4@ciao.com", "ciao.5@ciao.com", "ciao.6@ciao.com", "ciao.7@ciao.com", "ciao.9@ciao.com", "ciao.9@ciao.com", "ciao.10@ciao.com",];

var esitoPositivo = "Sei abilitato all'accesso";
var esitoNegativo = "Iscriviti per eseguire l'accesso";

if (mailUtente === listaMail) {
  console.log(esitoPositivo);
}
else {
  console.log(esitoNegativo);
}
