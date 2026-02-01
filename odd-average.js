function oddAverage(number){
    const odd = [];
    for (const element of number) {
        odd.push(element)
    }
    let sum = 0;
    for (const element1 of odd) {
        sum = sum + element1;
    }
    const len = odd.length;
    const avg = sum / len;
    console.log(sum,len)
    return avg;
}

const number = [1,3,5,7,9,11];
const avg = oddAverage(number);
console.log("Average of odd number of array: ",avg.toFixed(2));