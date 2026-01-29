const numbers = [12, 98, 5, 41, 23, 78, 46];

let rev = [];

for (const element of numbers) {
  if (element % 2 === 0) {
    rev.push(element);
  }
}
console.log(rev);
