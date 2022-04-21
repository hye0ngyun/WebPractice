// Set 객체의 값 추가 / 삭제 / 확인하기 (add, delete, has)
{
  const s = new Set();
  console.log(s);

  s.add("one");
  s.add("two");
  s.add("three");
  console.log(s); // Set(3) { 'one', 'two', 'three' }

  console.log(s.has("one")); // true
  s.delete("one");
  console.log(s.has("one")); // false
  console.log(s.has("two")); // true
  console.log(s); // Set(2) { 'two', 'three' }
}
