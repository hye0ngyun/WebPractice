{
  function add(x, y) {
    console.log(x, y);
    return x + y;
  }

  add(2, 5)
  // 매개변수는 함수 몸체 내부에서만 참조할 수 있다.
  // console.log(x, y); // 
}
{
  var var1 = 1;

  if(true) {
    var var2 = 2;
    if(true) {
      var var3 = 3;
    }
  }
  function foo() {
    var var4 = 4;
    
    function bar() {
      var var5 = 5;
    }
  }

  console.log(var1); // 1
  console.log(var2); // 2
  console.log(var3); // 3
  // console.log(var4); // not defined
  // console.log(var5); // not defined
}
{
  var x = 'global';

  function foo() {
    var x = 'local';
    console.log(x);
  }

  foo();
  console.log(x);
}
{
  // 렉시컬 스코프
  // 함수가 정의된 시점에 함수의 상위 스코프를 결정한다.
  var x = 1;
  function foo() {
    var x = 10;
    bar();
  }
  function bar() {
    console.log(x);
  }
  foo(); // 1
  bar(); // 1
}