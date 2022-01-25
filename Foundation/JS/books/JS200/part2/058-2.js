// 모듈을 여러 이름으로 내보내고 가져오기
import { add, add2, Person, version, Person2, version2 } from './058-1.js';

const result = add(1, 2);
const result2 = add2(2, 3);
const harin = new Person('하린');

console.log(result, result2);
console.log(harin, harin.name);
console.log(version);

// version = 'v2.0'; // 읽기만 가능하다. Uncaught TypeError: Assignment to constant variable.

console.log(version2);