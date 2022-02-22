// import * as 심벌변수
// 심벌변수.export프로퍼티로 접근
import { makeRandomNumber } from "../utils/makeRandomNumber";
import IPerson from "./IPerson";

// export는 기능을 **제공**하는 쪽에서 사용하는 키워드
// import는 다른 모듈의 기능을 **이용**하는 쪽에서 사용하는 키워드
// export 키워드는 interface, class, type, let, const, function 등에 붙일 수 있다.

export default class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}

export const makePerson = (name: string, age: number = makeRandomNumber()) => ({
  name,
  age,
});
