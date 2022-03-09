// 배열의 순서를 반대로 나열하기 (reverse)
{
  const str = "123456789";
  const arr = str.split("");
  console.log(arr);
  arr.reverse();
  console.log(arr); // 값자체가 바뀜
  console.log(arr.join(""));
}
