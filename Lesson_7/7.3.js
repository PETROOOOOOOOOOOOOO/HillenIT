function promtNumber(){
    let lastInput = null;
    for (let i = 0; i < 10; i++) {
        let input = prompt("Enter a number more than 100");
        if(input === null)break;
        let number = Number(input);
        if(!isNaN(number)){
            lastInput = number;
            if(number > 100)break;
        }
    }
    console.log(lastInput);
}
promtNumber();