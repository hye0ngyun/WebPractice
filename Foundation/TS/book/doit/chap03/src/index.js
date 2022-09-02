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
