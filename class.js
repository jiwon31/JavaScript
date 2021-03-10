"use strict";
// Object-oriendted programming
// class: template (틀) 메모리에 올라가지 않음
// object: instance of a class 메모리에 올라감
// JavaScript classes
// - introducecd in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
// 사용자가 값을 잘못 입력했을 때를 방지하기 위해서 사용
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // getter와 setter의 변수명을 다르게 설정해야한다. ex) _age 그렇지 않으면 무한 루프로 에러
  // this.age는 getter 호출
  // = age 처럼 값을 할당할 때는 setter 호출
  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //     throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! (최근에 나온거라 많이 사용 안 함)
class Experiment {
  publicFiled = 2;
  #privateFiled = 0;
}
const experiment = new Experiment();
console.log(experiment.publicFiled); // 2
console.log(experiment.privateFiled); // undefined

// 4. Static properties and methods
// Too soon! (최근에 나온거라 많이 사용 안 함)
// object에 상관없이, 들어오는 값에 상관없이 공통적으로 class에서 사용할 때 static사용
// object에 상관없이 class 자체에 연결
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // overriding
  draw() {
    super.draw();
    console.log("🔺");
  }

  getArea() {
    return (this.width * this.height) / 2;
  }

  // Object의 method overriding
  toString() {
    return `Triangle's color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// object가 class의 instance인지
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t (JS의 모든 object는 Object를 상속함)
console.log(triangle.toString());
