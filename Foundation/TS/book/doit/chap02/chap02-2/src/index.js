"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = require("./person/Person");
var chance_1 = require("chance");
var R = require("ramda");
// chance 패키지는 가짜 데이터(fake data)를 만드는데 사용한다.
// ramda 패키지는 함수형 유틸리티 패키지이다.
// chance 패키지는 Chance 클래스 하나만 export default 형태로 제공한다.
var chance = new chance_1.default();
var persons = R.range(0, 2).map(function (n) { return new Person_1.default(chance.name(), chance.age()); });
console.log(persons);
var person2 = {
    name: "shin",
    age: 25,
};
var ai = { name: "Jack", age: 32 };
function printMe(me) {
    console.log(me.etc); // 값이 없는 경우 undefined
    console.log(me.etc ? "".concat(me.name, " ").concat(me.age, " ").concat(me.etc) : "".concat(me.name, " ").concat(me.age));
}
printMe(ai);
console.log(!!undefined); // false
console.log(undefined ? "true" : "false"); // false
