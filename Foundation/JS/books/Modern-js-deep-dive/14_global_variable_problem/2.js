// 전역 변수의 사용을 억제하는 방법
{
  // 즉시 실행 함수
  (function() {
    var foo = 10; // 즉시 실행 함수의 지역 변수
  })();
  // console.log(foo); // ReferenceError: foo is not defined
}

{
  // 네임스페이스 객체
  var MYAPP = {};
  MYAPP.name = 'Shin';
  console.log(MYAPP.name);

  var MYAPP = {};
  MYAPP.person = {
    name: 'Shin', 
    age: 24
  };
  console.log(MYAPP.person.name);
}

{
  // 모듈 패턴
  // 클로저 개념을 이용해 변수를 숨긴다.
  var counter = (function() {
    // private 변수
    var num = 0;

    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
      increase() {
        return ++num;
      }, 
      decrease() {
        return --num;
      }
    };
  })();

  // private 변수는 외부로 노출되지 않는다.
  console.log(counter.num); // undefined

  console.log(counter.increase()); // 1
  console.log(counter.increase()); // 2
  console.log(counter.decrease()); // 1
  console.log(counter.decrease()); // 0
}
