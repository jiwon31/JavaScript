"use strict";

// https://ko.javascript.info/async-await
// async & await
// clear style of using promise :)
// 그렇다고 무조건 async & await만 사용하라는 건 아님. promise를 유지하는 게 맞는 상황도 있고 async로 변환해야하는 상황도 있다.

// 1. async (함수 안의 코드블럭들이 promise로 변환)
// 반드시 promise return
async function fetchUser() {
  // do network request in 10 secs...
  return "ellie";
}

const user = fetchUser();
user.then(console.log);
console.log(user); // Promise return

// 2. await✨
// async function 안에서만 사용 가능
// await 문은 async함수의 실행을 중단시키고, Promise가 fulfilled되거나 reject되기를 기다리고, 다시 async함수를 실행시킵니다.
// 이때 await문의 값은 Promise의 (fulfilled된)result이 됩니다.
function dealy(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// const testDealy = dealy(2000);
// console.log(testDealy);

async function getApple() {
  await dealy(2000); // dealy가 끝날 때까지 기다려줌
  return "🍎";
}

async function getBanana() {
  await dealy(1000);
  return "🍌";
}

// Promise chaining
// function getBanana() {
//   return dealy(1000)
//   .then(() => "🍌");
// }

// like callback hell
function pickFruits1() {
  return getApple().then((apple) => {
    return getBanana().then((banana) => `${apple} + ${banana}`);
  });
}

// 더러운 code
// 병렬 실행
// 서로 관련없는 promise들은 이렇게 코드 안 짬
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs🎉
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]); // 가장 먼저 값을 리턴한 아이만 값이 전달됨
}
pickOnlyOne().then(console.log);
