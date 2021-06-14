// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
docuPrint("title", "<h1>Elenco Studenti</h1>");

// var studentA = {
//     name: "Bilbo",
//     surname: "Baggins",
//     age: 111
// };

var students = [
    {
        name : "Bilbo",
        surname : "Baggins"
    },
    {
        name : "Frodo",
        surname : "Baggins"
    },
    {
        name : "Gandalf",
        surname : "The White"
    },
    {
        name : "Radagast",
        surname : "The Brown"
    },
    {
        name : "Thorin",
        surname : "Oakshield"
    },
];

for (var i = 0; i < students.length; i++) {
    var listItem = "<li>" + students[i].name + " " + students[i].surname+ "</li><br>";
    docuAdd("list", listItem);
};

// FUNZIONI **********
function docuPrint(x, y) {
document.getElementById(x).innerHTML = y;
}

function docuAdd(x, y) {
    document.getElementById(x).innerHTML += y;
}