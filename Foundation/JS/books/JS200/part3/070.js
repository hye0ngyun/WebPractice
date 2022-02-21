// 문자열 자르기3(substr)
{
  // '문자열'.substr(시작 인덱스, 길이)
  // lagacy method
  const sentence = "The sun will shine on us again";
  console.log(sentence.substr(0, 3)); // The
  console.log(sentence.substr(13)); // shine ~
  console.log(sentence.substr(13, 5)); // shine
  console.log(sentence.substr(0)); // The ~
  console.log(sentence.substr()); // The ~
  console.log(sentence.substr(50)); //
  console.log(sentence.substr(4, 2)); // su
}
