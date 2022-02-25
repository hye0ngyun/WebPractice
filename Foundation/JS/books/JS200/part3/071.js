// 문자열 길이 구하기 length
{
  const arr = ["short", "long sentence, it is not appropriate"];

  arr.forEach((str) => {
    console.log(`${str} length: ${str.length}`);
    if (str.length < 10) console.log(str);
  });
}
