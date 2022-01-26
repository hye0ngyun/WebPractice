// 표준 내장 객체 이해하기
const str1 = '자바스크립트 200제';
const str2 = new String('자바스크립트 200제');

console.log(typeof str1); // String
console.log(typeof str2); // Object

console.log(str1 === '자바스크립트 200제'); // true
console.log(str2 === new String('자바스크립트 200제')); // false
console.log(str2 === str1); // false

console.log(str1.valueOf()); // 자바스크립트 200제
console.log(str2.valueOf()); // 자바스크립트 200제
