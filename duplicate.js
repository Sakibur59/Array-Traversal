function noDuplicate(arr){
    const array = [];
    for (const element of arr) {
        if(array.includes(element) === false){
            array.push(element)
        }
    }
    return array;
}

const arr =['fardin','sara','ayat','fardin','rafa','sara'];
const result = noDuplicate(arr)
console.log(result)