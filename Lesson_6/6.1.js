function removeChar(str, char) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if(!char.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}
const inputStr = "Hello, World!";
const toDelete = ['l','d'];

const result = removeChar(inputStr, toDelete);
console.log(result);