let tripleNum = prompt('Введіть трьохзначне число')
let first = Math.floor(tripleNum / 100);
let second = Math.floor(tripleNum / 10) % 10;
let third = tripleNum % 10;

let allSame = (first === second) && (second === third);
let hasDuplicate = (first === second || second === third || first === third);

console.log("Всі цифри однакові:", allSame);
console.log("Є однакові цифри:", hasDuplicate);
