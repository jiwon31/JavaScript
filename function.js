"use strict";
// Function
// -fundamental building block in the program
// -subprogram can be used multiple times (재사용 가능)
// -performs a task or calculate a value (한 가지의 일 수행 or 값 계산)

// 1. Funtion declaration
// function name(param1, param2) { body... return; }
// one function === one thing (완전 중요!! 하나의 함수는 하나의 일만!)
// naming: doSomething, command. verb 동사형태로 
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS (중요한 포인트! object이기 때문에 변수에 할당도 하고, param으로 전달도 하고 return도 할 수 있음)
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  // JS는 type이 없기 때문에 param의 type을 명시하지 않는다.
  console.log(message);
}
log("Hello@");
log(1234);

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
// 배열로 전달
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  // printAnother();
  // console.log(childMessage); //error
}
printMessage();


// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit (Tip!!)
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
// 조건이 맞지 않는 경우, 값이 undefined이거나 -1인 경우 빨리 return을 하고
// 필요한 로직들은 그 뒤에 작성
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }

  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expresstion
// a function declaration can be called earlier than it is defined. (hoisted) (선언하기 전에 호출 가능)
// a function expresstion is created when the execution reaches it. (변수에 할당이 된 후에 호출 가능)
const print = function () {
  // anonymous function (이름이 없는 함수)
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// 함수를 전달해서 상황이 맞을 때 이 전달 된 함수를 불러! 하는 것이 Callback function
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugeer's stack traces
// recursions (자기자신을 호출)
const PrintNo = function print() {
  console.log("no!");
  // print(); -> recursions
};
randomQuiz("wrong", printYes, PrintNo);
randomQuiz("love you", printYes, PrintNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};

// const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a + b;
};

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 호출
// 잘 쓰진 않음
(function hello() {
  console.log("IIFE");
})();
