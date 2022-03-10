// 배열의 특정 조건을 충족하는 요소 찾기 (find)
{
  const arr = [
    { id: 0, name: "혜림", age: 6 },
    { id: 1, name: "현일", age: 5 },
    { id: 2, name: "현수", age: 3 },
    { id: 3, name: "우림", age: 2 },
    { id: 3, name: "탄이", age: 30 },
  ];

  const isHyeonSuHere = arr.filter((el) => el.name === "현수");
  const olderThanSix = arr.find((el) => el.age === 30);

  console.log(isHyeonSuHere, olderThanSix); // [ { id: 2, name: '현수', age: 3 } ] { id: 3, name: '탄이', age: 30 }
}
