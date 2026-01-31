function doThis(){
    console.log('solve this math');
    console.log('complete Homework');
    console.log("complete your meal");
}
doThis()


//using return 
function add(num1,num2){
    const result = num1+num2;
    return result
}

const result = add(20,1);
console.log(result)

function square(number){

    let total = number*number
    console.log("square the given parameter: ",total);
}

square(10);