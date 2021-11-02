{
  // 변수에 함수 리터럴을 할당
  let f = function add(x, y) {
    return x + y;
  }
  // 자바스크립트의 함수는 객체이다.

  // 함수 정의 방식
  // 1. 함수 선언문
  // 함수 선언문은 함수 이름을 생략할 수 없다.
  function add(x, y) {
    return x + y;
  }
  console.log(add(1, 2));

  // 2. 함수 표현식
  let add1 = function(x, y) {
    return x + y;
  }
  console.log(add1(1, 2));

  // 3. Function 생성자 함수
  let add2 = new Function('x', 'y', 'return x + y');
  console.log(add2(1, 2));

  // 4. 화살표 함수 (es6)
  let add3 = (x, y) => x + y;
  console.log(add3(1, 2));
  console.dir(add3);
}
{
  // 기명 함수 리터럴을 단독으로 사용하면 함수 선언문으로 해석된다.
  // 함수 선언문에서는 함수 이름을 생략할 수 없다.
  function foo() {
    console.log('foo');
  }
  foo();

  // 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
  // 함수 리터럴에서는 함수 이름을 생략할 수 있다.
  (function bar() {
    console.log('bar');
  });
  // bar(); // ReferenceError: bar is not defined
}
{
  // var 식별자 = function 함수이름
  var add = function add (x, y) {
    return x + y;
  }
  // 함수 이름으로 호출되는 것이 아닌 함수 객체를 가리키는 식별자로 호출한다.
  console.log(add(2, 5));
}
{
  // 익명 함수 표현식
  // 값이 될 수 있는 객체를 일급 객체라고 하는데, 자바스크립트의 함수는 일급 객체이다.
  // 따라서 함수 리터럴로 만든 함수 객체를 변수에 할당할 수 있다.
  var add = function(x, y) {
    return x + y;
  }
  console.log(add(2, 5));
  // 함수 리터럴의 함수 이름은 생략할 수 있다. 이를 익명 함수라 한다.

  // 기명 함수 표현식
  var add1 = function foo1(x, y) {
    return x + y;
  }

  
  console.log(add1(2, 5));
  // 함수 이름으로 호출하면 ReferenceError가 발생한다.
  // 함수 이름은 함수 몸체 내부에서만 유효한 식별자다.
  // console.log(foo1(2, 5)); // ReferenceError: foo1 is not defined

}
{
  let add1 = (function () {
    let a = 10;
    return function(x, y) {
      return x + y + a;
    }
  })();
  console.log(add1(1, 2)); // 13

  let add2 = (function () {
    let a = 10;
    return new Function('x', 'y', 'x + y + a;');
  })();

  // console.log(add2(1, 2)); // ReferenceError: a is not defined
}