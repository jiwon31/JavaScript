"use strict";
// Ctrl + api 클릭해서 정의보기

// 1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  // const result = fruits.join(); // ,가 기본
  const result = fruits.join("|");
  console.log(result);
}

// 2. make an array out of a string
{
  const fruits = "🍎, 🍊, 🍌, 🥝";
  //const result = fruits.split(",");
  const result = fruits.split(",", 2);
  console.log(result);
}

// 3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // [5, 4, 3, 2, 1]
}

// 4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // 5제외 (2~4)
  console.log(result);
  console.log(array); // [1, 2, 3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// 5. find a student with the score 90
// first truly인 element return
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// 6. make an array of enrolled students
// 조건에 만족하는 모든 elements들을 array로 return
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// 7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// 배열에 있는 요소들을 func을 거쳐서 다른 방식의 데이터로 만들고 싶을 때 사용
{
  const result = students.map((student) => student.score);
  // const result = students.map((student) => student.score * 2);
  console.log(result);
}

// 8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = students.every((student) => student.score >= 50);
  console.log(result2);
}

// 9. compute students' average score
// array의 값들을 누적해서 합칠 때?
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  // console.log(result);
  console.log(result / students.length);
}

// 10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join();

  // score가 50이상인 점수만 출력하고 싶을 때
  const result2 = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
  console.log(result2);
}

// 11. do 10 sorted in ascending order
// result should be: '45, 66, 80, 88 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b) // .sort()도 됨
    .join();

  // descending
  const result2 = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result);
  console.log(result2);
}
