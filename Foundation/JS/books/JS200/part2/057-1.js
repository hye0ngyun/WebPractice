// 모듈 기본값 정의하고 가져오기
// ES6 모듈 시스템에서는 default 키워드를 사용하여 모듈에서 기본으로 내보내는 값을 정의할 수 있다.

// export default 'hello';
// export default function hello(name) {
//   console.log('hello' + name);
// };
export default class Hello {
  constructor(greeting) {
    this.greeting = greeting;
  }
  hi(name) {
    console.log(`${this.greeting} ${name}`);
  }
}

// default 키워드는 하나의 모듈(파일)에서 한 번만 사용할 수 있다.