// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


var mailingList = ["mail1@gmail.com", "mail2@gmail.com", "mail3@gmail.com"];
var userMail = prompt("Inserisci email");
var result = false;
for (var i = 0; i < mailingList.length; i = i + 1) {
  if (userMail == mailingList[i]) {
    result = true;
  }
}
if (result == true) {
  document.getElementById("access").innerHTML = "Accesso consentito";
} else {
  document.getElementById("access").innerHTML = "Accesso non consentito";
}
