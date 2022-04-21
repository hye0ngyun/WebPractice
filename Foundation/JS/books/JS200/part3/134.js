// Set 객체 값 나열하기 (keys, values, entries)
// Set 객체는 값의 집합이기 때문에 키(key)는 의미가 없다.
// 따라서 keys 메소드는 values 메소드와 동일하게 처리가 된다.
{
  const s = new Set();

  s.add("one");
  s.add("two");
  s.add("three");

  const keys = s.keys();
  const values = s.values();
  const entries = s.entries();

  console.log(`keys: ${keys}, values: ${values}, entries: ${entries}`);

  console.log(keys.next().value); // 'one'
  console.log(values.next().value); // 'one'
  console.log(entries.next().value); // ['one', 'one']

  console.log(keys);
  console.log(values);
  console.log(entries);
}
