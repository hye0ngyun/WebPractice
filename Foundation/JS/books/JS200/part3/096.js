// 배열의 특정 조건을 기준으로 필터링하기 (filter)
{
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const filteredTwo = arr.filter((el) => {
    console.log(`현재 위치의 값을 ${el}입니다.`);
    return el % 2 == 0; // 짝수인것만 반환
  });
  console.log(filteredTwo); // [ 2, 4, 6, 8, 10 ]

  const filterdThree = arr.filter((el) => el % 3 === 0);
  console.log(filterdThree); // [ 3, 6, 9 ]

}
