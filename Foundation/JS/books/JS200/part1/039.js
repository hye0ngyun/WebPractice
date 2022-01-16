// 스코프 이해하기
// 자바스크립트의 스코프는 코드를 작성하는 시점에 스코프가 결정되는 렉시컬(Lexical) 스코프이다.
var a = 10;
console.log(a);
function print() {
  var b = 20;
  if (true) {
    var c = 30;
  }
  console.log(a, b, c);
}

print() // 10\n 10, 20, 30
// console.log(b); // b is not defined

var a = 'global';

function print1() {
  console.log(a);
}

function print2() {
  var a = "local";
  print1();
}

print1(); // global
print2(); // global 렉시컬 스코프 특성
// 만약 자바스크립트가 다이나믹 스코프 였다면 "local"이 출력됐을 것이다.