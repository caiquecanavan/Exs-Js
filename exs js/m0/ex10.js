let x = 5;
let y = 10;

let z = (x++ * --y) / 2 + (y % 3);
console.log(z);
//o x++ está valendo 5 na expressão e o --y está valendo 9, primeiro resolvemos as contas dentro dos parenteses então : x++ * --y = 45, y%3 = 1. Depois a divisão então 45/2 = 22,5.
