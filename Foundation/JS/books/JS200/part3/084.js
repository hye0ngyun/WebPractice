// 배열 합치기 (concat)
{
  const prevList = [1, 2, 3];
  const currentList = [4, 5, 6];
  const nextList = [7, 8, 9];

  console.log(prevList.concat(currentList)); // 반환할 뿐 값자체가 바뀌진 않는다.
  console.log(prevList);
  console.log(prevList.concat(currentList, nextList));
  console.log(prevList);
  console.log(prevList.concat([1, 2, 3, 4], [12]));
}
