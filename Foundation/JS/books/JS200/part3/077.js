// 특정 문자열 포함 여부 확인하기 (includes)
// 문자열.includes(문자열, [인덱스 = 0])
// 인덱스는 기본값으로 0이며, 인덱스를 넣을 경우 인덱스부터 문자열이 존재하면 true, 존재하지 않으면 false를 반환한다.
{
  const str = "Make your lives extraordinary";

  console.log(str.includes("Make")); // true
  console.log(str.includes("Make", 1)); // false
}
