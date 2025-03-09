let num = 0;
let str = 'Petro';
let bool = true;
let bigInt = 231231231231312231221312312312n;
let myNull = null;
let myUndefined;
const mySymbol = Symbol('213321');
let myObject = {
    name:'Petro',
    age:18,
    isAdmin: true,
};
const myArray = [1,2,3,4,5,];



console.log("str", typeof str);
console.log("bool", typeof bool);
console.log("num", typeof num);
console.log("bigInt", typeof bigInt);
console.log("myNull", typeof myNull);
console.log("myUndefined", typeof myUndefined);
console.log("mySymbol", typeof Symbol);
console.log("myObject", typeof myObject);
console.log("myArray", typeof myArray);
console.log('Happy developing ✨')

let arr =[];
for (let i = 0; i < 10; i++) {
    arr.push(i);
}
console.log("arr", arr);
