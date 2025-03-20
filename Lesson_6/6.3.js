function removeElement(arr,item) {
    const index = arr.indexOf(item);
    if(index !== -1) {
        arr.splice(index,1);
    }
}
const arr = [1,2,3,4,5,6,7,8,9,10];
removeElement(arr,4);
console.log(arr);