// 모듈 이해하기
// 네임스페이스 패턴
{
  // IIFE(Immediately Invoked Fucntion Expression): 즉시 실행 함수
  var namespaceA = (function () {
    var privateVariable = '비공개 변수';
    return {
      publicApi: function () {
        console.log(privateVariable + '를 접근할 수 있습니다.');
      }
    }
  })();

  console.log(namespaceA.privateVariable); // undefined
  namespaceA.publicApi(); // 비공개 변수를 접근할 수 있습니다.
  const privateVariable = 1;
  console.log(privateVariable); // 1
  namespaceA.publicApi(); // 비공개 변수를 접근할 수 있습니다.
}