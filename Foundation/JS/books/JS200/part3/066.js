// 실수형 숫자로 변환하기(parseFloat)
{
  console.log(parseFloat(5.55)); // 5.55
  console.log(parseFloat("5.55")); // 5.55
  console.log(parseFloat("1.11 5.55 asd123숫자의 결과값")); // NaN이 반환되지 않고, 맨 처음 실수 이외의 공백, 문자, 숫자는 무시한다.
}
