// 배열 순환하기 (forEach)
{
  // 배열.forEach(callback function)
  const arr = [
    { id: 0, name: "혜림", age: 6 },
    { id: 1, name: "현일", age: 4 },
    { id: 2, name: "철수", age: 5 },
    { id: 3, name: "짱구", age: 3 },
  ];

  arr.forEach((el) => {
    console.log(`${el.name}의 나이는 ${el.age}살`);
  });
}
