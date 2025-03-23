function createSum() {
    let sum = 0;
    return function (num){
        sum += num;
        return sum;
    }
}

const sum = createSum();
console.log(sum(4));
console.log(sum(4));
console.log(sum(4));
console.log(sum(4));