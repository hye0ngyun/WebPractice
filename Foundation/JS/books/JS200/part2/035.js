// 예외 처리하기
// throw 문, try-catch-finally 문
function checkNumber(val) {
  if (typeof val !== 'number') throw '유효하지 않은 값입니다.';
  console.log('숫자형 값으로 확인됐습니다.');
}

checkNumber(100);
// checkNumber('Wrong type');
console.log("완료");

// try-catch-finaly
try {
  checkNumber(100);
  checkNumber('Wrong type');
} catch (e) {
  console.log(`에러가 발생했습니다.\n${e}`);
} finally {
  console.log('완료');
}