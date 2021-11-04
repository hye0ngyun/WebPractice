{
  // 즉시 실행 함수(IIFE, Immedately Invoked Function Expression)
  // 익명 즉시 실행 함수
  console.log((function() {
    var a = 3;
    var b = 5;
    return a * b;
  })());

  // 기명 즉시 실행 함수
  console.log((function foo () {
    var a = 3;
    var b = 5;
    return a * b;
  })());
  
  // foo(); // ReferenceError: foo is not defined
}
{
  // 즉시 실행 함수도 일반 함수처럼 값을 반환할 수 있다.
  let res = (function () {
    let a = 3;
    let b = 5;
    return a * b;
  })();

  console.log(res); // 15

  // 즉시 실행 함수에도 일반 함수처럼 인수를 전달할 수 있다.
  res = (function(a, b){
    return a * b;
  }(3, 5));
  console.log(res); // 15
}