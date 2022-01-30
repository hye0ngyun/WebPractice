{
  console.log("-----------------------------------");
  console.log("암묵적 타입 변환");
  var x = 10;

  // 암묵적 타입 변환
  // 문자열 연결 연산자는 숫자 타입 x의 값을 바탕으로 새로운 문자열을 생성한다.
  var str = x + '';
  console.log(typeof str, str);

  // x변수의 값이 변경된 것은 아니다.
  console.log(typeof x, x);
  console.log("-----------------------------------");
}
{
  console.log("-----------------------------------");
  // 문자열 타입으로 변환
  console.log("문자열 타입으로 변환");
  // 숫자 타입
  0 + ''
  -0 + ''
  1 + ''
  -1 + ''
  NaN + ''
  Infinity + ''
  -Infinity + ''

  // 불리언 타입
  true + ''
  false + ''

  // null 타입
  null + ''
  
  // undefined 타입
  undefined + ''

  // 심벌 타입
  // Symbol() + '' // TypeError: Cannot convert a Symbol value to a string

  // 객체 타입
  {} + '' // "[object Object]"
  Math + '' // "[object Math]"
  console.log([] + ''); // []
  [10, 20] + '' // 10, 20
  console.log(function foo(){} + ''); // function foo(){}
  console.log(Array + ''); // function Array() { [native code] }

  // 숫자 타입으로 변환
  console.log("숫자 타입으로 변환");

  1 - '1' // 0
  1 * '10' // 10
  1 / 'one' // NaN

  '1' > 0 // true

  // 문자열 타입
  + '' // 0
  + '0' // 0
  + '1' // 1
  + 'string' // NaN

  // 불리언 타입
  + true // 1
  + false // 0

  // null 타입
  + null // 0
  
  // undefined 타입
  + undefined // NaN

  // 심벌 타입
  // + Symbol() // TypeError: Cannot convert a Symbol value to a number

  // 객체 타입
  + {} // NaN
  + [] // 0
  + [10, 20] // NaN
  + (function(){}) // NaN

  // 숫자 타입으로 변환
  console.log("숫자 타입으로 변환");
  if ('') console.log('1');
  if (true) console.log('2'); // 2
  if (0) console.log('3');
  if ('str') console.log('4'); // 4
  if (null) console.log('5');

  // 아래의 조건문은 모두 코드 블록을 실행한다.
  if (!false) console.log(false +' is falsy value');
  if (!undefined) console.log(undefined +' is falsy value');
  if (!null) console.log(null +' is falsy value');
  if (!0) console.log(0 +' is falsy value');
  if (!NaN) console.log(NaN +' is falsy value');
  if (!'') console.log('' +' is falsy value');
  
  // 전달받은 인수가 Falsy 값이면 true, Truthy 깂이면 false를 반환한다.
  function isFalsy(v) {
    if (!v) console.log(v + ' is Falsy value');
  }

  // 전달받은 인수가 Truthy 값이면 true, Falsy 깂이면 true를 반환한다.
  function isTruthy(v) {
    if (!!v) console.log(v + ' is Truthy value');
  }

  // 모두 false로 평가된다.
  isFalsy(false);
  isFalsy(undefined);
  isFalsy(null);
  isFalsy(0);
  isFalsy(NaN);
  isFalsy('');

  // 모두 true로 평가된다.
  isTruthy(true);
  isTruthy('0');
  isTruthy(1);
  isTruthy({});
  isTruthy([]);
  console.log("-----------------------------------");
}
{
  console.log("-----------------------------------");
  console.log("명시적 타입 변환");
  var x = 10;

  // 명시적 타입 변환
  // 숫자를 문자열로 타입 캐스팅 한다.
  var str = x.toString();
  console.log(typeof str, str);

  // x변수의 값이 변경된 것은 아니다.
  console.log(typeof x, x);
  
  console.log("-----------------------------------");
}
{
  console.log("-----------------------------------");
  console.log("문자열 타입으로 변환");
  // 1. String 생성자 함수를 new 연산자 없이 호출하는 방법
  // 숫자 타입 => 문자열 타입
  String(1);
  String(NaN);
  String(Infinity);
  // 불리언 타입 => 문자열 타입
  String(true);
  String(false);

  // 2. Object.prototype.toString 메서드를 사용하는 방법
  (1).toString();
  (NaN).toString();
  (Infinity).toString();
  // 불리언 타입 => 문자열 타입
  (true).toString();
  (false).toString();

  // 3. 문자열 연결 연산자를 이용하는 방법
  1 + '';
  NaN + '';
  Infinity + '';
  true + '';
  false + '';

  console.log('숫자 타입으로 변환');
  // 1. Number 생성자 함수를 new 연산자 없이 호출하는 방법
  Number('0');
  Number('-1');
  Number('10.53');
  Number(true);
  Number(false);

  // 2. parseInt, parseFloat 함수를 사용하는 방법(문자열만 변환 가능)
  parseInt('0');
  parseInt('-1');
  parseInt('10.53');
  parseInt(true);
  parseInt(false);

  // 3. + 단항 산술 연산자를 이용하는 방법
  + '0';
  + '-1';
  + '10.53';
  + true;
  + false;

  // 4. * 산술 연산자를 이용하는 방법
  '0' * 1;
  '-1' * 1;
  '10.53' * 1;
  true * 1;
  false * 1;

  console.log("불리언 타입으로 변환");
  // 1. Boolean 생성자 함수를 new 연산자 없이 호출하는 방법
  // 문자열 타입 => 불리언 타입
  Boolean('x'); // true
  Boolean(''); // false
  Boolean('false'); // true
  // 숫자 타입 => 불리언 타입
  Boolean(0); // false
  Boolean(1); // true
  Boolean(NaN); // false
  Boolean(Infinity); // true
  // null 타입 => 불리언 타입
  Boolean(null); // false
  // undefined 타입 => 불리언 타입
  Boolean(undefined);
  // 객체 타입 => 불리언 타입
  Boolean({}) // true
  Boolean([]) // true

  // 2. 부정 논리 연산자를 두 번 사용하는 방법
  // 문자열 타입 => 불리언 타입
  !!('x'); // true
  !!(''); // false
  !!('false'); // true
  // 숫자 타입 => 불리언 타입
  !!(0); // false
  !!(1); // true
  !!(NaN); // false
  !!(Infinity); // true
  // null 타입 => 불리언 타입
  !!(null); // false
  // undefined 타입 => 불리언 타입
  !!(undefined);
  // 객체 타입 => 불리언 타입
  !!({}) // true
  !!([]) // true
  console.log("-----------------------------------");
}