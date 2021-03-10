"use strict";
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value } (중요!!)

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 20 };
print(ellie);

// with JavaScript magic (dynamically typed language) -> runtime때 type이 결정되기 때문에
// can add properties later
// 많이 사용하지 않는 게 좋다
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);

// .은 코딩하는 그 순간 그 키에 해당하는 값을 받아오고 싶을 때 쓴다.
// Computed properties는 정확하게 어떤 키가 필요한지 모를 때 즉, runtime에서 결정될 때 쓴다.
function printValue(obj, key) {
  // console.log(obj.key); // undefined
  // (obj에 key라는 property가 있니? key라는 property 자체는 없어!)
  console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30);
console.log(person4);

// 4. Constructor Function
// object를 만드는 함수로, class가 없었을 때 이렇게 사용했었다.
// 순수하게 object만을 만드는 함수의 이름은 대문자로 시작 ex) Person
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random); // undefined

// 6. for..in vs for..of
// for (key in obj)
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable) 배열, 리스트..
const array = [1, 2, 3, 4, 5];
for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(target, [obj1, obj2, obj3...]) target object를 return
const user = { name: "ellie", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2); // 뒤에 나오는 값일수록 앞과 동일한 property가 있으면 덮어씌움
console.log(mixed.color); // blue
console.log(mixed.size);
