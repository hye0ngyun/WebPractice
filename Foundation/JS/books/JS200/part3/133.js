// Set 객체로 Array 중복 요소 없애기
// 집합 객체이므로 인스턴스화 시킬 때 배열이 들어온 경우 중복 요소는 제거한다.
{
  const arr = ["one", "two", "three", "two", "one", "four"];
  const s = new Set(arr);
  console.log([...s]);
  console.log(s);
}
