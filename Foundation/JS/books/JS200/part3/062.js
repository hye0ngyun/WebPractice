// NaN값 확인하기(Number.isNaN)
{
  console.log(Number.isNaN(NaN)); // true
  console.log(Number.isNaN(undefined)); // false
  console.log(Number.isNaN("Is it Number?")); // false
  console.log(Number.isNaN(0)); // false
  console.log(Number.isNaN(null)); // false

  console.log(Number.isNaN(-1)); // false
  console.log(Number.isNaN(0 / 0)); // true
  console.log(new Date(), Number.isNaN(new Date())); // false
  console.log(Number.isNaN(new Date().toString())); // false
  console.log(Number.isNaN(Infinity)); // false
}
{
  function verifyNumber(n) {
    if (!n || Number.isNaN(n)) return 0;
    return n;
  }
  const num1 = verifyNumber(15); // 15
  const num2 = verifyNumber(undefined); // 0
  const num3 = verifyNumber(null); // 0
  const num4 = verifyNumber(NaN); // 0
  console.log(num1 + num2 + num3 + num4); // 15
}
