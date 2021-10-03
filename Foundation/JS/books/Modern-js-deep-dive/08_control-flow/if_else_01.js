{
  var x = 2;
  var result;

  if (x % 2) {
    result = '홀수';
  } else {
    result = '짝수';
  }

  console.log(result);
}

// 삼항 연산자
{
  var x = 1;
  result = x % 2 ? '홀수' : '짝수';
  console.log(result);
}

// 중첩 삼항 연산자
// 홀수, 짝수, 영인 경우
{
  var x = 0;
  result = x ? (x % 2 ? '홀수' : '짝수') : '영';
  console.log(result);
}