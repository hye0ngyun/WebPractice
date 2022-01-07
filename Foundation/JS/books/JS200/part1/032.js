// ES6의 향상된 객체 문법 - 비구조화 할당(Destructuring Assignment)
// python의 tupple unpacking과 비슷한 느낌


// 1. 객체 비구조화 할당
var obj = { a: 1, b: 2, c: 30, 'd': 44, e: 5, 6: 6 };
console.log(obj); // { '6': 6, a: 1, b: 2, c: 30, d: 44, e: 5 }

var { a, c, f } = obj;
console.log(`a: ${a}`); // 1
console.log(`c: ${c}`); // 30
console.log(`f: ${f}`); // undefined

var { a: newA = 10, f: newF = 5 } = obj;
// newA는 a 값이 존재하기 때문에 기본값 10이 아닌 a 값 1을 할당한다.
console.log(`newA: ${newA}`); // 1
// newF는 f 값이 undefined로 존재하지 않기 때문에 기본값 5를 할당한다.
console.log(`newF: ${newF}`); // 5

// 2. 배열 비구조화 할당
var arr = [1, 2, 30, 44, 5];
var [b, c, ...rest] = arr;
console.log(`0) b: ${b}`);
console.log(`0) c: ${c}`);
console.log(`0) rest: ${rest}`);

var [a = 10, f = 9, e] = [1];
console.log(`1) a: ${a}`); // 1
console.log(`1) f: ${f}`); // 9
console.log(`1) e: ${e}`); // undefined

// swap
[a, f] = [f, a];
console.log(`2) a: ${a}`); // 9
console.log(`2) f: ${f}`); // 1

function getArr() {
  return [1, 2, 3, 4, 5, 6];
}
[a, , , , , f] = getArr();
console.log(`3) a: ${a}`); // 1
console.log(`3) f: ${f}`); // 6