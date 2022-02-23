// 인터페이스 구현
// class 클래스 이름 implements 인터페이스 이름 {...}
// 인터 페이스는 이러이러한 속성이 있다는 규약(spec)에 불과할 뿐, 물리적으로 해당 속성을 만들지는 않는다.
interface IPerson4 {
  name: string;
  age?: number;
}

class Person4 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}
let person4: Person4 = new Person4("jack4", 44);
console.log(person4); // Person4 { name: 'jack4', age: 44 }
