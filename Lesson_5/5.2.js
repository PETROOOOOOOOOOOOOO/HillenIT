const exchangeRate = 26;
for (let dollars = 10; dollars <= 100; dollars += 10) {
    console.log(`${dollars} USD = ${dollars * exchangeRate} UAH`);
}