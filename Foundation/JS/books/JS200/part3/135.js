// Set 객체 순환하기 (for-of, foreach)
{
  const s = new Set();

  s.add("one");
  s.add("two");

  console.log("키 정보만 출력합니다.");
  for (let key of s.keys()) {
    console.log(key);
  }

  console.log("값 정보만 출력합니다.");
  for (let value of s.values()) {
    console.log(value);
  }

  console.log(`[for..of, entries] 키, 값 정보를 동시에 출력합니다.`);
  for (let [key, value] of s.entries()) {
    console.log(`key: ${key}, value: ${value}`);
  }

  console.log(`[forEach] 키, 값 정보를 동시에 출력합니다.`);
  s.forEach((v, k) => {
    console.log(v, k);
  });
}
