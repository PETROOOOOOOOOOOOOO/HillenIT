let isOriginalColor = true;

function toggleColor() {
    const textElement = document.getElementById('text');

    if (isOriginalColor) {
        textElement.style.color = 'red';
    } else {
        textElement.style.color = 'black';
    }

    isOriginalColor = !isOriginalColor;
}