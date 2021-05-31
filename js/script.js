// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// chiedo email all'utente
var userEmail = prompt('Inserisci la tua e-mail')
// console.log(userEmail);

// creo array database e-mail registrate (Si può provare a creare un random generator di email con un ciclo for? --> da provare)
var registeredUsers = [ '0hyunw@freeallapp.com' , 'ilio.east5@helpman.ml' , 'qaziz@usbvap.com' , 'oichimarugin123y@jeruknipis.buzz' , '2amira@usayoman.com' , 'amohame@tapiitudulu.com' ]
console.log(registeredUsers);

// Lista Cognomi:
// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova