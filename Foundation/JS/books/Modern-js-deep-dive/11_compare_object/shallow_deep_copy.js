// 객체를 프로퍼티 값으로 같는 객체의 경우
// 한 단계 까지만 복사 하는 것을 얕은 복사(shallow copy)
// 중첩돼있는 객체를 모두 복사 하는 것을 깊은 복사(deep copy)

{
  const o = {
    x: {
      y: 1
    }
  };

  // 얕은 복사
  const c1 = { ...o }; // 스프레드 문법
  console.log(c1 === o); // false
  console.log(c1.x === o.x); // true
  console.log(c1.x, o.x);
  o.x = {y: 2}
  console.log(c1.x, o.x);
  // lodash의 cloneDeep을 사용한 깊은 복사
  // "npm install lodash"로 lodash를 설치한 후, Node.js 환경에서 실행
  // const _ = require('lodash');
  // // 깊은 복사
  // const c2 = _.cloneDeep(o);
  // console.log(c2 === o); // false
  // console.log(c2.x === o.x); // false\
}
{
  const v = 1;

  // 깊은 복사
  const c1 = v;
  console.log(c1 === v); // true

  const o = {x: 1};
  
  // 얕은 복사
  const c2 = o;
  console.log(c2 === o); // true
}
{
  let person = {
    name: 'Shin'
  }

  // 참조 값을 복사(얕은 복사)
  let copy = person;
  let c1 = {...person};
  console.log(person === copy);
  console.log(person, copy, c1); // Shin Shin Shin
  person.name = 'Kim';
  copy.age = 24;
  console.log(person, copy, c1); // Kim Kim Shin
}