{
  // 1. 객체 확장 금지
  console.log('----- 객체 확장 금지 -----');
  const person = { name: 'Lee' };

  // person 객체는 확장이 금지된 객체가 아니다.
  console.log(Object.isExtensible(person)); // true

  // person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
  Object.preventExtensions(person);

  // person 객체는 확장이 금지된 객체이다.
  console.log(Object.isExtensible(person)); // false

  // 프로퍼티 추가가 금지된다.
  person.age = 20; // 무시된다. strict mode 에서는 에러
  console.log(person); // {name: 'Lee'}

  // 프로퍼티 추가는 금지되지만 삭제는 가능하다.
  delete person.name;
  console.log(person); // {}

  // 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
  // Object.defineProperty(person, 'age', {value: 20}); //TypeError: Cannot define property age, object is not extensible
}

{
  // 객체 밀봉
  console.log('----- 객체 밀봉 -----');
  const person = {name: 'Lee'};

  // person 객체는 밀봉(seal)된 객체가 아니다.
  console.log(Object.isSealed(person)); // false

  // person 객체를 밀봉(seal)하여 프로퍼티 추가, 삭제, 재정의를 금지한다.
  Object.seal(person);

  // person 객체는 밀봉(seal)된 객체이다.
  console.log(Object.isSealed(person)); // true

  console.log(Object.getOwnPropertyDescriptors(person));
  // {
  //   name: {
  //     value: 'Lee',
  //     writable: true,
  //     enumerable: true,
  //     configurable: false
  //   }
  // }

  // 프로퍼티 추가가 금지된다.
  person.age = 20; // 무시. strict mode에선 에러
  console.log(person);

  // 프로퍼티 삭제가 금지된다.
  delete person.name; // 무시. strict mode에선 에러
  console.log(person);

  // 프로퍼티 값 갱신을 가능하다.
  person.name = 'Shin';
  console.log(person);

  // 프로퍼티 어트리뷰트 재정의가 금지된다.
  // Object.defineProperty(person, 'name', {configurable: true}); // TypeError: Cannot redefine property: name
}

{
  // 객체 동결
  console.log('----- 객체 동결 -----');
  const person = {name: 'Lee'};

  // person 객체는 동결(freeze)된 객체가 아니다.
  console.log(Object.isFrozen(person)); // false

  // person 객체를 동결(freeze)하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지한다.
  Object.freeze(person);

  // person 객체는 동결(freeze)된 객체이다.
  console.log(Object.isFrozen(person)); // true

  // 동결(freeze)된 객체는 writable과 configurable이 false다.
  console.log(Object.getOwnPropertyDescriptors(person));
  // {
  //   name: {
  //     value: 'Lee',
  //     writable: false,
  //     enumerable: true,
  //     configurable: false
  //   }
  // }

  // 프로퍼티 추가가 금지된다.
  person.age = 20; // 무시. strict mode에선 에러
  console.log(person);

  // 프로퍼티 삭제가 금지된다.
  delete person.name; // 무시. strict mode에선 에러
  console.log(person);

  // 프로퍼티 값 갱신이 금지된다.
  person.name = 'Shin'; // 무시. strict mode에선 에러
  console.log(person);

  // 프로퍼티 어트리뷰트 재정의가 금지된다.
  // Object.defineProperty(person, 'name', {configurable: true}); //TypeError: Cannot redefine property: name
}

{
  // 4. 불변 객체
  console.log('----- 불변 객체 -----');
  const person = {
    name: 'Lee', 
    address: { city: 'Seoul' }
  };

  // 얕은 객체 동결
  Object.freeze(person);

  // 직속 프로퍼티만 동결한다.
  console.log(Object.isFrozen(person)); // true

  // 중첩 객체까지 동결하지 못한다.
  console.log(Object.isFrozen(person.address)); //false

  person.address.city = 'Busan';
  console.log(person); // { name: 'Lee', address: { city: 'Busan' } }
}

{
  console.log('----- deep freeze -----');
  function deepFreeze(target) {
    // 객체가 아니거나 동결된 객체는 무시하고 객체이고 동결되지 않은 객체만 동결한다.
    if(target && typeof target === 'object' && !Object.isFrozen(target)) {
      Object.freeze(target);

      Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
  }

  const person = {
    name: 'Shin',  
    address: { city: 'Seoul' }
  };

  // 깊은 객체 동결
  deepFreeze(person);

  console.log(Object.isFrozen(person)); // true

  // 중첩 객체까지 동결한다.
  console.log(Object.isFrozen(person.address)); // true

  person.address.city = 'Busan';
  console.log(person); // { name: 'Shin', address: { city: 'Seoul' } }
}