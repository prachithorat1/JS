let notes = [];

function addNote() {
    let input = document.getElementById("noteInput");
    let message = document.getElementById("message");
    let noteText = input.value.trim();

    if (noteText === "") {
        message.innerText = "Please enter a note";
        return;
    }

    if (notes.includes(noteText)) {
        message.innerText = "Duplicate note not allowed";
        return;
    }

    if (notes.length === 3) {
        message.innerText = "You can add only 3 notes";
        return;
    }

    notes.push(noteText);
    message.innerText = "Note added successfully";

    let li = document.createElement("li");
    li.innerText = noteText;
    document.getElementById("noteList").appendChild(li);

    input.value = "";
}
