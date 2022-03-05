// 배열 요소를 분할/변환하기 (form)
{
  // Array.from(배열로 변환될 값, 반환될 배열 내부 요소에 대한 callback 함수)
  const str = "12345678";

  const distributedArr = Array.from(str);
  console.log(distributedArr);

  const modifiedArr = Array.from(distributedArr, (el) => el * 2);
  console.log(modifiedArr);

  const modifiedArr2 = modifiedArr.map((el) => el * 2);
  console.log(modifiedArr2);
}
