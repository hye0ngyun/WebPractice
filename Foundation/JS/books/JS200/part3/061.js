// 자료형 확인하기(typeof, instanceof)
{
  const str = 'JavaScript';
  const strObj = new String('JavaScript');
  const num = 200;
  const numObj = new Number(200);
  const bool = true;
  const boolObj = new Boolean(true);
  const func = function () { };
  const func2 = () => { };
  const arr = [10, 200, 3000];
  const obj = { a1: 'test' };
  const empty = null;
  const notCalled = undefined;

  console.log('--- typeof ---');
  console.log(`typeof str === 'string' => ${typeof str === 'string'}`);
  console.log(`typeof strObj === 'object' => ${typeof strObj === 'object'}`);
  console.log(`typeof num === 'number' => ${typeof num === 'number'}`);
  console.log(`typeof numObj === 'object' => ${typeof numObj === 'object'}`);
  console.log(`typeof bool === 'boolean' => ${typeof bool === 'boolean'}`);
  console.log(`typeof boolObj === 'object' => ${typeof boolObj === 'object'}`);
  console.log(`typeof func === 'function' => ${typeof func === 'function'}`);
  console.log(`typeof func2 === 'function' => ${typeof func2 === 'function'}`);
  console.log(`typeof arr === 'object' => ${typeof arr === 'object'}`);
  console.log(`typeof obj === 'object' => ${typeof obj === 'object'}`);
  console.log(`typeof null === 'object' => ${typeof empty === 'object'}`);
  console.log(`typeof undefined === 'object' => ${typeof notCalled === 'undefined'}`);

  console.log('--- instanceof ---');
  console.log(`str instanceof String => ${str instanceof String}`); // false
  console.log(`strObj instanceof String => ${strObj instanceof String}`);
  console.log(`num instanceof Number => ${num instanceof Number}`); // false
  console.log(`numObj instanceof Number => ${numObj instanceof Number}`);
  console.log(`bool instanceof Boolean => ${bool instanceof Boolean}`); // false
  console.log(`boolObj instanceof Boolean => ${boolObj instanceof Boolean}`);
  console.log(`arr instanceof Array => ${arr instanceof Array}`);
  console.log(`obj instanceof Object => ${obj instanceof Object}`);
  console.log(`func instanceof Function => ${func instanceof Function}`);
  console.log(`func2 instanceof Function => ${func2 instanceof Function}`);
  console.log(`null instanceof Function => ${empty instanceof Object}`); // false
  console.log(`undefined instanceof Function => ${notCalled instanceof undefined}`); // TypeError: Right-hand side of 'instanceof' is not an object
  // undefined는 객체가 아니다.



}
