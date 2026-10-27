// 함수선언
// def 함수명():
//     수행할 코드
// 함수명()

// function 함수명(){
//     수행할 코드
// }
// 함수명()

// function greeting() {
//   console.log("안녕하세요!");
// }

// console.log("함수 시작 전");
// greeting();
// console.log("함수 종료");

// function getArea() {
//   let width = 10;
//   let height = 20;
//   let area = width * height;

//   console.log(area);
// }

// getArea();

// function getArea(width, height) {
//   let area = width * height;
//   console.log(area);
// }

// getArea(100, 200);

// 함수 반환
// function getArea(width, height) {
//   let area = width * height;
//   return area;
// }

// let result = getArea(10, 20);
// console.log(result);

// function getArea(width, height) {
//   let area = width * height;
//   return area;
//   console.log("함수종료");
// }

// let result = getArea(10, 20);
// console.log(result);

// 중첩함수
// function greeting() {
//   function greetingWithName(name) {
//     console.log(`hello! ${name}`);
//   }

//   let name = "이정환";
//   greetingWithName(name);
// }

// greeting();

// 함수와 호이스팅

// func();

// function greeting() {
//   console.log("hello");
// }

// 함수 표현식

// let greeting = function () {
//   console.log("hello");
// };

// greeting();

// function greetFunc() {
//   console.log("hello");
// }

// let greeting = greetFunc;
// greeting();

console.log(parseInt("10"));
