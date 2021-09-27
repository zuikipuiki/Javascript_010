/* 3 and  5
3 * 3   5 * 5
9 + 25
34 * 34
return 34*34*/


// Function declarations 

function add(number1, number2) {
 let squared = Math.pow(number1, 2) + Math.pow (number2, 2);
return Math.pow(squared, 2);
 }
 console.log(add(3, 5));
 

// Function expressions

let add2 = function (num1, num2) {
  let sq2 = Math.pow(num1, 2) + Math.pow (num2, 2);
return Math.pow(sq2, 2);
}
console.log(add2(5, 4));

// Arrow functions
let add3 = (n1, n2) => {
   let sq3 = Math.pow(n1, 2) + Math.pow (n2, 2);
return Math.pow(sq3, 2);
}
console.log(add3(5, 5));