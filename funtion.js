function doThis() {
  console.log("solve this math");
  console.log("complete Homework");
  console.log("complete your meal");
}
doThis();

//using return
function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

const result = add(20, 1);
console.log(result);

function square(number) {
  let total = number * number;
  console.log("square the given parameter: ", total);
}

square(10);

function double(number, value) {
    console.log(number,value)
    if(value === true){
        let result = number *4;
        return result;
    } else {
        let result = number *2;
        return result;
    }
}

console.log(double(40,true));
console.log(double(20,false));


function elements(number){
    const len = number.length;
    return len;
}

console.log("Array length: ",elements([12,31,4,51,7,51,54,13,45]))

// let arrLen=