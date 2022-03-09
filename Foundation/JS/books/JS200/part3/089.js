// 배열 인덱스로 특정 요소 수정하기 (splice)
{
  // 배열.splice(시작 인덱스, 삭제할 요소의 개수, [추가될 요소들 ...])
  const fruits = ["melon", "lemon", "source", "apple", "juice"];
  fruits.splice(4, 1);
  console.log(fruits); // [ 'melon', 'lemon', 'source', 'apple' ]
  fruits.splice(3, 0, "123");
  console.log(fruits); // [ 'melon', 'lemon', 'source', '123', 'apple' ]
  fruits.splice(6, 0, "4", "5", 6);
  console.log(`${fruits}`); // melon,lemon,source,123,apple,4,5,6
}
