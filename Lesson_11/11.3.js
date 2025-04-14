function showRandomImg(){
    const randomNumber = Math.floor(Math.random() * 9) + 1;

    const imageIndex = `images/${randomNumber}.png`;

    document.getElementById('randomImg').src = imageIndex;
}