// 모듈을 여러 이름으로 내보내고 가져오기
export const version = 'v1.0';

export var personA = {
  name: 'a'
};

export function add(a, b) {
  return a + b
}

export const add2 = (a, b) => a + b;

export class Person {
  constructor(name) {
    this.name = name;
  }
}

class Person2 {
  constructor(name) {
    this.name = name;
  }
}
const version2 = 'v2.0';

// export Person; // 문법 오류
export { version2, Person2 };