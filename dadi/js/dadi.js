// 2 - Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


var numeroGiocatore = Math.round(Math.random()*5)+1;
console.log("il tuo numero è " + numeroGiocatore);

var numeroPC = Math.round(Math.random()*5)+1;
console.log("il numero del computer è " + numeroPC);

var haiVinto = ("Complimenti! Hai battuto il computer.");
var haiPerso = ("Mi dispiace, sei sfigato e hai perso.");
var pareggio = ("Pareggio! Gioca ancora.")

if (numeroGiocatore > numeroPC) {
  console.log(haiVinto);
  document.getElementById('titolo').innerHTML = "Complimenti! Hai battuto il computer.";
}
else if (numeroGiocatore == numeroPC) {
  console.log(pareggio);
  document.getElementById('titolo').innerHTML = "Pareggio! Gioca ancora.";
}
else {
  console.log(haiPerso);
  document.getElementById('titolo').innerHTML = "Mi dispiace, sei sfigato e hai perso.";
}
