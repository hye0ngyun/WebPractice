{
  function foo() {
    // 변수 x 생성
    var x = 'local'; // 변수 x에 값 할당
    console.log(x); // local
    return x;
    // 변수 x 소멸
  }
  
  foo();
  // console.log(x); // ReferenceError: x is not defined
}
{
  var x = 'global';
  function foo() {
    console.log(x); // undefined
    var x = 'local';
  }

  foo();
  console.log(x); // global
}