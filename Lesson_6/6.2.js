function averageOfNum(arr) {
    const numbers = arr.filter(item=>typeof item==="number");
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}
const mix = [1,'f','fds',null,false,6,7,3,5]
const result = averageOfNum(mix);
console.log(result);
