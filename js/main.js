// Prima parte - ammissione
//preparare lista invitati
//chiedere nome (mail) all'utente
//verificare se il nome è nell'elenco, se non lo è, gioco finito.
//se lo è, stampare la scritta 'ok, sei il benvenuto'

var listaInvitati = ['Luca', 'Giovanni', 'Patrizia', 'Stefano', 'Elena', 'Federica', 'Giorgio']
var ammissioneFesta = prompt ('Inserisca il suo nome, prego');

var trovato = false;

for (var i = 0; i < listaInvitati.length; i++) {
    console.log(listaInvitati[i])
    if (ammissioneFesta == listaInvitati[i]) {
        trovato = true;
    }
}
if (trovato == true) {
    alert ('Benvenuto, la stavamo aspettando con ansia')
} else {
    alert ('Mi spiace, lei non è in lista')
}
