const N = parseInt(prompt("Введіть число N:"), 10);

for (let i = 1; i <= 100; i++) {
    if (i * i > N) {
        break;
    }
    console.log(i);
}