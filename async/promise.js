"use strict";

// Promise is a JavaScript object for asynchronous operation.
// State: pending(promise가 만들어져서 우리가 지정한 operation이 수행 중 일 때)
// -> fulfilled(operation을 성공적으로 끝냈을 때) or rejected(file을 찾을 수 없거나 network에 문제가 생겼을 때)
// Producer vs Consumer의 차이점 (Data를 제공하는 사람 vs Data를 쓰는 사람)

// 1. Producer
// new promise가 만들어지는 순간, executor 함수가 바로 실행됨
// 이 점을 고려하지 않으면 불필요한 netowrk통신이 발생할 수 있음
// -> (사용자가 요구할 때만 네트워크 통신을 해야할 때 즉, 버튼을 눌렀을 때 통신을 해야할 때)
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network통신, read files)
  console.log("doing somethig...");
  setTimeout(() => {
    resolve("ellie");
    // reject(new Error("no network"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise //
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber //
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    // block에 쌓여있으니까 return 필요
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));
// promise.then은 promise를 반환함 -> 그래서 chaining이 가능

// 4. Error Handling
const getHen = () =>
  // block에 쌓여있지 않으니까 return 필요X
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg) // .then((hen) => getEgg(hen)) // callback 함수를 전달할 때, 받아오는 value를 다음 함수로 하나만 호출하는 경우 생략 가능
  .catch((error) => {
    return "🥖";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
