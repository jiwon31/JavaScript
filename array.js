"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["π", "π₯­"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // last item

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push("π", "π");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("π", "π");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// κ·Έλμ μ μ¬μ©νμ§ μλ κ²μ΄ μ’λ€.

// splice: remove an item by index position
fruits.push("π", "π");
console.log(fruits);
// fruits.splice(1); // index1λΆν° λ€ μ§μ
fruits.splice(1, 1); // μ΄λμλΆν° λͺ κ° μ§μΈκ±΄μ§
console.log(fruits);
fruits.splice(1, 1, "π", "π₯₯");
// fruits.splice(1, 0, "π", "π₯₯"); index1μ μ½μ
console.log(fruits);

// combine two arrays
const fruits2 = ["π₯­", "π"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.log(fruits);
console.log(fruits.indexOf("π"));
console.log(fruits.indexOf("π₯₯"));
console.log(fruits.indexOf("π")); // -1

// includes
console.log(fruits.includes("π")); // true
console.log(fruits.includes("π")); // false

// lastIndexOf
fruits.push("π");
console.log(fruits);
console.log(fruits.indexOf("π")); // 0
console.log(fruits.lastIndexOf("π")); // 4
