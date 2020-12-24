// 1. use stricy
// added in ES 5
// use this for vanila javascript
'use strict';

// 2. variable
// let(added in ES6) mutable
// block scope
let globalName = 'globalname';
{
    let name = "Shin";
    console.log(name);
    name = "Hello";
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this)
// var hoisting (move declaration from bottom to top)
// 호이스팅이란 어디에 선언했느냐 상관없이 항상 선언을 제일 위로 끌어 올려주는것
// 또한 var는 block scope가 없기 때문에 사용하면 안된다.
console.log(age);
{
    age = 4;
    console.log(age);
    var age;
}


//name = 4;
//let name;

// 3. constant(immutable)
// favor immutable data type always for a few reasons
// - security
// - thread safety
// - reduce human mistake
// 값을 선언함과 동시에 할당한 뒤로 값을 절대 변경할 수 없음
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null
// object, box container
// function, first-class function

const count = 17;   // integer
const size = 17.1;  // float
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 0;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123124123214312312312312312123n;
console.log(`value ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;  // template lierals (sting)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
const canRead = true;
const test = 1 > 3; // false
console.log(`vlaue: ${canRead}, type: ${typeof canRead}`);
console.log(`vlaue: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const shin = {name:'shin', age:23};
console.log(shin.name, shin.age);
shin.age = 24;
console.log(shin.name, shin.age);

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));    // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / 2;
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(charAt(0));