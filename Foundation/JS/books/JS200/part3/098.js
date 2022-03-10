// 배열 요소 일괄 변경하기 (map)
{
  const arr = [
    { id: 0, name: "혜림", age: 6 },
    { id: 1, name: "현일", age: 5 },
    { id: 2, name: "현수", age: 3 },
    { id: 3, name: "우림", age: 2 },
    { id: 3, name: "탄이", age: 30 },
  ];

  const grownup = arr.map((el) => el.age++); // [ 6, 5, 3, 2, 30 ]

  console.log(arr);
}
