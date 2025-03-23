function mult(a){
    return function(b){
        return a * b;
    }
}
const result = mult(5)(9);
console.log(result);