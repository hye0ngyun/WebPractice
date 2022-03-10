// 배열 요소가 특정 조건을 만족하는지 확인하기 (some)
{
  const arr = [
    { id: 0, name: "혜림", age: 6 },
    { id: 1, name: "현일", age: 5 },
    { id: 2, name: "현수", age: 3 },
    { id: 3, name: "우림", age: 2 },
  ];

  const isHyeonSuHere = arr.some((el) => el.name === "현수");
  const olderThanSix = arr.some((el) => el.age > 6);

  console.log(isHyeonSuHere, olderThanSix); // true false
}
