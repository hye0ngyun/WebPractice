// 모듈을 다양한 방식으로 사용하기
import { version as moduleVersion } from './059-1.js';
const version = 'v1.0';
console.log(moduleVersion);

// as 키워드는 export 할 때도 사용할 수 있다.
export { version as ver }
// 가져올 때는 version, ver 두 가지 이름 모두 가져올 수 있다.