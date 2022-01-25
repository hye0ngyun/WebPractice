// 함수 호이스팅 이해하기
console.log(hello); // [Function: hello]
hello(); // 안녕하세요
function hello() {
  console.log('안녕하세요');
}

console.log(hello2); // undefined
hello2(); // TypeError: hello2 is not function
var hello2 = function () {
  console.log('안녕하세요2');
}
