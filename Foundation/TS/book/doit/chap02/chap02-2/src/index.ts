// 어떤 파일이 export 키워드로 내보낸 심벌을 받아서 사용하려면 import 키워드로 해당 심벌을 불러와야 한다.
// import { 심벌 목록 } from '파일의 상대 경로'
import IPerson from "./person/IPerson";
import Person, { makePerson } from "./person/Person";
import Chance from "chance";
import * as R from "ramda";
// chance 패키지는 가짜 데이터(fake data)를 만드는데 사용한다.
// ramda 패키지는 함수형 유틸리티 패키지이다.
// chance 패키지는 Chance 클래스 하나만 export default 형태로 제공한다.

const chance = new Chance();
let persons: IPerson[] = R.range(0, 2).map(
  (n: number) => new Person(chance.name(), chance.age())
);
console.log(persons);

// // const testMakePerson = (): void => {
// //   let jane: IPerson = makePerson("Jane");
// //   let jack: IPerson = makePerson("Jack");
// //   console.log(jane, jack);
// // };

// testMakePerson();

interface IPerson2 {
  name: string;
  age: number;
  ect?: boolean;
}

let person2: IPerson = {
  name: "shin",
  age: 25,
};

let ai: {
  name: string;
  age: number;
  ect?: boolean;
} = { name: "Jack", age: 32 };

function printMe(me: { name: string; age: number; etc?: boolean }) {
  console.log(me.etc); // 값이 없는 경우 undefined
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
}
printMe(ai);
console.log(!!undefined); // false
console.log(undefined ? "true" : "false"); // false
