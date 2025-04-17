let savedLink = '';

function setLink() {
    const link = prompt("Введіть посилання (включно з https://):");
    if (link) {
        savedLink = link;
        alert("Посилання збережено!");
    } else {
        alert("Посилання не введено.");
    }
}

function goToLink() {
    if (savedLink) {
        window.location.href = savedLink;
    } else {
        alert("Спочатку введіть посилання.");
    }
}