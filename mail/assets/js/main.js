const invitedListEmail = [
  "ciao@gmail.com",
  "me@icloud.com",
  "prova@tiscali.it",
  "ciao2@gmail.com",
];

let userMail = prompt("Inserisci la tua mail");
let accesso = false;

for (let i = 0; i < invitedListEmail.length; i++) {
  if (userMail === invitedListEmail[i]) accesso = true;
}

if (accesso) {
  alert("Benvenuto, sei stato invitato");
} else {
  alert("Accesso negato");
}
