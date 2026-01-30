let a = "md sakibur rahman";

console.log(a.toUpperCase());

let b = "MD SAKIBUR RAHMAN";

console.log(b.toLowerCase());

let c = "  fardin  ";

let d = "fardin";

if (c.trim() === d) {
  console.log(c.trim());
} else {
  console.log("MissMatch");
}


let e ="fardin khan";

console.log(e.slice(2,4));

let f ='MD Sakibur Rahman';

console.log(f.split(" ").reverse().join(" | "));