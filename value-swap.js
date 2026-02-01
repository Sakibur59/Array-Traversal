let a = 4;
let b = 10;
console.log(a, b);
const temp = a;
a = b;
b = temp;
console.log(a, b);

//dis-structuring

let c = 3;
let d = 7;
console.log(c,d);
[c, d] = [d, c];
console.log(c, d);
