function htmlHome(i, title, note) {
    return`
    <div class="noteContent2">
    <div class="addContent">
        <h2 id="mytitle${i}">${title}</h2>
        <p id="mynote${i}">${note}</p>
    </div>
    <div class="button">
        <img onclick="noteTrash(${i})" class="trash" src="img/Trash.png">
    </div>
    </div>`;
}


function htmlTrash(i, title, note) {
    return`
    <div class="noteContent2">
    <div class="addContent">
        <h2 id="mytitle${i}">${title}</h2>
        <p id="mynote${i}">${note}</p>
    </div>
    <div class="button">
        <img onclick="deleteNote(${i})" class="trash" src="img/Trash.png">
    </div>
    </div>`;
}