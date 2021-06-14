// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
docuPrint("title", "<h1>Elenco Studenti</h1>");

var students = [
    {
        name: "Bilbo",
        surname: "Baggins",
        age: 111
    },
    {
        name: "Frodo",
        surname: "Baggins",
        age: 60
    },
    {
        name: "Gandalf",
        surname: "The White",
        age : 99999
    },
    {
        name: "Radagast",
        surname: "The Brown",
        age: 99999
    },
    {
        name: "Thorin",
        surname: "Oakshield",
        age: 320
    },
];

addStudent(students);

// FUNZIONI **********
function docuPrint(x, y) {
document.getElementById(x).innerHTML = y;
}

function docuAdd(x, y) {
    document.getElementById(x).innerHTML += y;
}

function addStudent(x) {
    var newStudentName = prompt("Inserisci il nome del nuovo studente");
    var newStudentSurname = prompt("Inserisci il cognome del nuovo studente");
    var newStudentAge = parseInt(prompt("Inserisci l'età del nuovo studente"));
     var newStudent = {
         name: newStudentName,
         surname: newStudentSurname,
         age: newStudentAge
    };
    x.push(newStudent);
    for (var i = 0; i < students.length; i++) {
        var listItem = "<li>" + "Nome: " + students[i].name + "<br>Cognome: " + students[i].surname+ "<br>" + "Età: " + students[i].age + "</li><br>";
        docuAdd("list", listItem);
    };
}