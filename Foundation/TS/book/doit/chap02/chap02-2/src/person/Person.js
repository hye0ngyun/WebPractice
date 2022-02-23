"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
// import * as 심벌변수
// 심벌변수.export프로퍼티로 접근
var makeRandomNumber_1 = require("../utils/makeRandomNumber");
// export는 기능을 **제공**하는 쪽에서 사용하는 키워드
// import는 다른 모듈의 기능을 **이용**하는 쪽에서 사용하는 키워드
// export 키워드는 interface, class, type, let, const, function 등에 붙일 수 있다.
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports.default = Person;
var makePerson = function (name, age) {
    if (age === void 0) { age = (0, makeRandomNumber_1.makeRandomNumber)(); }
    return ({
        name: name,
        age: age,
    });
};
exports.makePerson = makePerson;
