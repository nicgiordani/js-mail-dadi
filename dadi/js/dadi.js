// 2 - Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


var numeroGiocatore = Math.floor(Math.random() * 7);
console.log("il tuo numero è " + numeroGiocatore);

var numeroPC = Math.floor(Math.random() * 7);
console.log("il tuo numero è " + numeroPC);

var haiVinto = ("Complimenti! Hai battuto il computer.");
var haiPerso = ("Mi dispiace, sei sfigato e hai perso.");

if (numeroGiocatore > numeroPC) {
  console.log(haiVinto);
  document.getElementById('titolo').innerHTML = "Complimenti! Hai battuto il computer.";
}
else {
  console.log(haiPerso);
  document.getElementById('titolo').innerHTML = "Mi dispiace, sei sfigato e hai perso.";
}
