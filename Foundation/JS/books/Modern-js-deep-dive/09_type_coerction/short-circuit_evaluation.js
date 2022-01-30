{
  // 논리 연산자 표현식의 평가 결과는 불리언 값이 아닐 수도 있다.
  // 논리합(||) 또는 논리곱(&&) 연산자 표현식은 언제나 2개의 피연산자 중 어느 한쪽으로 평가된다.
  console.log('Cat' && 'Dog'); // Dog

  console.log('Cat' || 'Dog'); // Cat

  // 논리곱 연산자
  console.log('Cat' || 'Dog'); // Cat
  console.log(false || 'Dog'); // Dog
  console.log('Cat' || false); // Cat

  // 논리합 연산자
  console.log('Cat' && 'Dog'); // Dog
  console.log(false && 'Dog'); // false
  console.log('Cat' && false); // false
  {
    let done = true;
    let message = '';

    // if문
    if (done) message = '완료';

    // 단축 평가
    message = done && '완료';

    console.log(message);
  }
  {
    let done = false;
    let message = '';

    // if문
    if(!done) message = '미완료';

    // 단축 평가
    message = done || '미완료';

    console.log(message);
  }
  {
    // 삼항 조건 연산자
    let done = true;
    let message = '';

    // if문
    if(done) message = '완료';
    else message = '미완료';

    // 삼항 연산자
    message = done ? '완료' : '미완료';
    console.log(message);
  }
}
{
  // 객체
  {
    let elem = null;
    // let value = elem.value; // TypeError: Cannot read property 'value' of null
  }
  {
    let elem = null;
    let value = elem && elem.value;
    console.log(value); // null
  }
}
{
  // 함수 매개변수에 기본값을 설정할 때
  // 단축 평가를 사용한 매개변수의 기본값 설정
  function getStringLength(str) {
    // str이 참(문자열이 존재)이라면 그대로, 거짓(문자열이 없는 경우 '')
    str = str || '';
    return str.length;
  }

  getStringLength(); // 0
  getStringLength('12'); // 2

  // ES6의 매개변수 기본값 설정
  function getStringLength(str = '') {
    return str.length;
  }

  getStringLength(); // 0
  getStringLength('12'); // 2
}
{
  // 옵셔널 체이닝 연산자
  {
    let elem = null;
    // elem이 null 또는 undefined면 undefined를 반환하고, 그렇지 않으면 프로퍼티 참조를 이어간다.
    let value = elem?.value;
    console.log(value); // undefined
  }
  {
    let elem = null;
    let value = elem && elem.value;
    console.log(value); // null
  }
  {
    let str = '';
    let length = str && str.length;
    console.log(length); // ''
  }
  {
    let str = '';
    // 옵셔널 체이닝은 좌항이 null이나 undefined가 아니라면 참조를 이어간다.
    let length = str?.length;
    console.log(length); // 0
  }
  {
    let number = 1;
    // 만약 참조를 이어가는데 참조값이 존재하지 않는다면 undefined를 반환한다.
    let length = number?.length;
    console.log(length);
  }
}
{
  // null 병합 연산자
  // 좌항의 피연산자가 null 또는 undefined라면 우항의 피연산자를 반환하고,
  // 그렇지 않으면 좌항의 피연산자를 반환한다.
  // 객체가 제대로 생성됐는지 체크할 때 사용할 수 있다.
  // 변수에 기본 값을 설정할 때 유용하다.
  {
    let foo = null ?? 'default string';
    console.log(foo); // default string
  }
  {
    let foo = '' || 'default string';
    console.log(foo); // default string
  }
  {
    let foo = '' ?? 'default string';
    console.log(foo); // ''
  }
}