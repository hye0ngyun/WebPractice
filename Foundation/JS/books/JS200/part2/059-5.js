// 모듈을 다양한 방식으로 사용하기
import * as add from './059-3.js'; // 059-3.js 모듈 전체를 가져온다. 그리고 전체를 대변할 이름을 as를 통해 준다.
import './059-4.js';

console.log(add.version); // add 모듈의 version
const added = add.default(1, 2);
// const added2 = add.add(1, 2); // default로 내보낸 속성(?)은 네임스페이스로 접근이 불가능하다. 오롯이 default로 접근 해야 한다.
console.log(added);

hello('harin');