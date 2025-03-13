let tripleNum = prompt('Введіть трьохзначне число')
let first = Math.floor(tripleNum / 100); // Перша цифра
let second = Math.floor(tripleNum / 10) % 10; // Друга цифра
let third = tripleNum % 10; // Третя цифра

let allSame = (first === second) && (second === third);
let hasDuplicate = (first === second || second === third || first === third);

console.log("Всі цифри однакові:", allSame);
console.log("Є однакові цифри:", hasDuplicate);
