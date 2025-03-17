const num = parseInt(prompt("Введіть ціле число:"), 10);

if (num <= 1) {
    console.log("Число має бути більше 1");
} else {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${num} є простим числом`);
    } else {
        console.log(`${num} не є простим числом`);
    }
}
