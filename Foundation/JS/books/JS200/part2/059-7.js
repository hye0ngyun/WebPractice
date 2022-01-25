// 모듈을 다양한 방식으로 사용하기
import { value } from './059-6.js';
console.log(value); // 1

setTimeout(() => {
  console.log(value); // 2
}, 2000)

// 값이 복제되는 것이 아닌 모듈의 변수를 그대로 가져온다.
// 따라서 모듈에서 value가 1 증가함에 따라 모듈을 가져온 곳에서의 value도 값이 1 증가한 2가 출력되는 것을 확인할 수 있다.
// 복제되었다면 1, 1이 출력됐을 것이다.