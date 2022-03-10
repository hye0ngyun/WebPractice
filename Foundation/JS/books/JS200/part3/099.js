// 배열 내 값을 누적시키기 (reduce)
{
  // 배열.reduce((누적된 값, 현재 요소 값, [현재 인덱스], [원본 배열]) => {
  //   return 누적값으로 반환되는 값
  // }, [초기값]);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(arr.reduce((acc, el) => acc + el)); // 55
  console.log(
    Array.prototype.reduce((acc, el) => {
      acc + el;
    }, 0)
  ); // 0
}
