let titles = []; // array für notizen
let notes = [];
let titlesTrash = []; // array für mülleimer
let notesTrash = [];

load(); // Daten werden geladet

function render() {
    document.getElementById('title').value = '';
    document.getElementById('note').value = '';

    let noteList = document.getElementById('noteList'); // Variable wird erstellt
    noteList.innerHTML = '';

    for (let i = 0; i < titles.length; i++) {
        const title = titles[i];
        const note = notes[i];

        noteList.innerHTML += htmlHome(i, title, note); // Aus der Template-Funktion
    }
}


function renderTrash() {
    let trashList = document.getElementById('trashList'); // Variable wird erstellt
    trashList.innerHTML = '';

    for (let i = 0; i < titlesTrash.length; i++) {
        const title = titlesTrash[i];
        const note = notesTrash[i];

        trashList.innerHTML += htmlTrash(i, title, note); // Aus der Template-Funktion
    }
}


function addNote() { // fügt Array-Elemente hinzu
    let title = document.getElementById('title').value;
    let note = document.getElementById('note').value;

    if (document.getElementById('note').value.length && document.getElementById('title').value.length > 0) {

        titles.push(title); // Wenn Inhalt größer als 0 ist dann wird Inhalt hinzugefügt
        notes.push(note);

        render(); // Wenn die Seite geladen hat soll alles erscheinen
        save(); // wird gespeichert

    }   else {
        alert('Bitte Felder ausfüllen'); // Wenn Felder leer sind dann sonst nicht möglich
    }    
}


function noteTrash(i) {
    const title = titles[i];
    const note = notes[i];

    titlesTrash.push(title);
    notesTrash.push(note);

    titles.splice(i, 1);
    notes.splice(i, 1);

    render();
    save();
}


function deleteNote(i) { // löscht Array-Elemente
    titlesTrash.splice(i, 1);
    notesTrash.splice(i, 1);

    renderTrash();
    save();
}


function save() { // Daten werden gespeichert
    let titlesAsText = JSON.stringify(titles); // array wird in String umgewandelt
    localStorage.setItem('titles', titlesAsText); // Value wird gesetzt
    let notesAsText = JSON.stringify(notes); // array wird in String umgewandelt
    localStorage.setItem('notes', notesAsText); // Value wird gesetzt
}


function load() { // Daten werden geladet
    let titlesAsText = localStorage.getItem('titles'); // Value wird returnt
    let notesAsText = localStorage.getItem('notes'); // Value wird returnt

    if (titlesAsText && notesAsText) {
        titles = JSON.parse(titlesAsText);
        notes = JSON.parse(notesAsText);
    }
}








   
