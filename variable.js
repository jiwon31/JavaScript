// 1. Use strict
// added in ES5
// use this for Valina Javascript.
"use strict";

// 2. Variable, rw(read/write)
// let (added in ES6)
// 전역변수는 많이 사용하지 않는 것이 좋다.
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name); // 아무것도 출력되지 않음
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려준다.
// has no block scope
age = 4;
var age;

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.
// 변수의 값을 변경할 일이 없다면 웬만하면 const 사용하기
const daysInweek = 7;
const maxNumber = 5;

// Note!
// Immutable(값이 변하지 않는) data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable(값이 변하는) data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons.
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// 더이상 작은 단위로 나눠질 수 없는 한가지의 아이템
// object, box container: 싱글 아이템들을 여러개 묶어서 한 단위로, 박스로 관리
// function, first-class function: 함수도 변수에 할당 가능. 즉, 함수의 파라미터나 리턴값으로도 가능

// number
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0; //infinity
const negativeInfinity = -1 / 0; //-infinity
const nAn = "not a number" / 2; // NaN
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
// 명확하게 '너는 텅텅 비어있는 값이야'라고 지정
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`); // type: object

// undefined
// 선언되었지만 값이 없을 때
let x;
// let x = undefined; 도 ok
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers(식별자) for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`); // symbol은 그냥 출력하면 error. 따라서 description을 사용하여 string으로 변환한 후 출력해야한다.

// object, real-life object, data structure
const ellie = { name: "ellie", age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
// run time에서 type이 정해짐
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5; // string
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2"; // number
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // error
