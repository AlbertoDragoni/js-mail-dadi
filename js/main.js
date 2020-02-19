var listaInvitati = ['Luca', 'Giovanni', 'Patrizia', 'Stefano', 'Elena', 'Federica', 'Giorgio']
var ammissioneFesta = prompt ('Inserisca il suo nome, prego');

var nomePresente = false;

for (var i = 0; i < listaInvitati.length; i++) {
    console.log(listaInvitati[i])
    if (ammissioneFesta == listaInvitati[i]) {
        nomePresente = true;
    }
}
if (nomePresente == true) {
    alert ('Benvenuto, la stavamo aspettando con ansia')
} else {
    alert ('Mi spiace, lei non è in lista')
}
// Dadi
// generare due numeri random

var primoNumero = Math.floor(Math.random() * 6)
console.log(primoNumero);
var secondoNumero = Math.floor(Math.random() * 6)
console.log(secondoNumero);
if (primoNumero > secondoNumero) {
    alert ('Player 1 Wins!')
} else if (primoNumero < secondoNumero) {
    alert ('Player 2 Wins!')
} else if (primoNumero = secondoNumero) {
    alert ('Draw!!')
}
