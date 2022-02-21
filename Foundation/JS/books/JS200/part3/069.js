// 문자열 자르기2(substring)
{
  // '문자열'.substring(시작 인덱스, 종료 인덱스)
  // 시작 인덱스 ~ (종료 인덱스 - 1)인덱스
  // 종료 인덱스가 시작 인덱스보다 큰 경우 서로 바꿔서 결과값 반환
  const sentence = "The sun will shine on us again";
  console.log(sentence.substring(0, 3)); // The
  console.log(sentence.substring(13)); // shine ~
  console.log(sentence.substring(13, 24)); // shine on us
  console.log(sentence.substring(0)); // The ~
  console.log(sentence.substring()); // The ~
  console.log(sentence.substring(50)); //
  console.log(sentence.substring(7, 2)); // e sun
}
