// 문자열 자르기1(slice)
{
  // '문자열'.slice(시작 인덱스, 종료 인덱스)
  // 시작 인덱스 ~ (종료 인덱스 - 1)인덱스
  const sentence = "The sun will shine on us again";
  console.log(sentence.slice(0, 3)); // The
  console.log(sentence.slice(13)); // shine ~
  console.log(sentence.slice(13, 24)); // shine on us
  console.log(sentence.slice(0)); // The ~
  console.log(sentence.slice()); // The ~
  console.log(sentence.slice(50)); //
  console.log(sentence.slice(7, 2)); //
}
