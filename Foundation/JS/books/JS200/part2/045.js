let user = {
  name: 'jeado'
};
let description = Object.getOwnPropertyDescriptor(user, 'name');
console.log(description);

let user2 = {};
Object.defineProperty(user2, "name", {
  value: 'jeado',
  enumerable: true,
  configurable: true,
  writable: false
});
console.log(user2, user2.name);
user2.name = 'bbo'; // 읽기 전용 속성이므로 쓰기 불가능
console.log(user2.name);

let user3 = {
  name: 'jeado',
  toString() {
    return this.name;
  }
};

Object.defineProperty(user3, 'toString', {
  enumerable: false
});
for (let key in user3) {
  console.log(key); // toString의 enumerable을 false로 바꿨기 때문에 name만 나온다.
}

let user4 = {};
Object.defineProperty(user4, "name", {
  value: 'jeado',
  configurable: true, // true인 경우 delete가 가능하다.
  enumerable: false,
  writable: false
});
console.log(user4.name); // jeado
delete user4.name;
console.log(user4.name); // undefined
Object.defineProperty(user4, "name", {
  value: 'new jeado',
  writable: true
})
console.log(user4.name); // new jeado

// Object.defineProperty()함수 속성들의 기본 값은
// configuable: false
// enumerable: flase
// writable: false
// value: undefined