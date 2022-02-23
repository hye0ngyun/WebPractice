// 접근제한자와 생성자
// 생성자 매개변수에 public같은 접근제한자를 붙이면 해당 매개변수의 이름을 가진 속성이 클래스에 선언된 것 처럼 동작한다.
class Person2 {
  constructor(public name: string, public age?: number) {
    // 생략 가능
    // this.name = name;
    // this.age = age;
  }
}
let jack2: Person2 = new Person2("jack", 25);
console.log(jack2);
// 접근 제한자가 public이기 때문에 클래스 외부에서도 접근 가능
console.log(`jack2.name: ${jack2.name}, jack2.age: ${jack2.age}`);

// 생성자 매개변수에 접근제한자를 사용하지 않는 경우
class Person3 {
  name: string;
  age?: number;
  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}
let jack3: Person3 = new Person3("jack3", 33);
console.log(jack3); // Person3 { name: 'jack3', age: 33 }
