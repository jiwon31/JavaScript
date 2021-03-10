"use strict";

// JSON
// JavaScript Object Notation
// independent programming language and platform

// 1. Object to JSON
//stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // symbol: Symbol("id"),
  // symbol같은 js에만 있는 특별한 데이터도 json에 포함되지 않음
  jump: function () {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);
// 함수는 json에서 제외된다. Object에 있는 data가 아니기 때문에

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "toto" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
// const sampleObj = JSON.parse(json);
// console.log(sampleObj);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
// callback 함수 적용하기 전후 비교해보기
console.log(obj);
rabbit.jump();
// obj.jump();  error -> rabbit을 json으로 바꿀 때 함수는 포함되지 않는다. 그 json을 다시 object로 바꾼 거니까 함수는 없다.

console.log(rabbit.birthDate.getDate()); // getDate -> Date라는 Object 안에 있는 API
// console.log(obj.birthDate.getDate()); error -> obj의 birthDate는 string. rabbit이 json으로 바뀌면서 birthDate가 Object에서 string이 됨.
console.log(obj.birthDate.getDate()); // 위의 callback 함수를 사용하면 해결!
