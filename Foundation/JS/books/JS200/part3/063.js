// NaN값 확인하기(Number.isInteger)
{
  console.log(Number.isInteger(NaN)); // false
  console.log(Number.isInteger(undefined)); // false
  console.log(Number.isInteger("Is it Number?")); // false
  console.log(Number.isInteger(0)); // true
  console.log(Number.isInteger(null)); // false

  console.log(Number.isInteger(-1)); // true
  console.log(Number.isInteger(0 / 0)); // false
  console.log(new Date(), Number.isInteger(new Date())); // false
  console.log(Number.isInteger(new Date().toString())); // false
  console.log(Number.isInteger(Infinity)); // false
}
{
  function verifyNumber(n) {
    if (!Number.isInteger(n)) return 0;
    return n;
  }
  const num1 = verifyNumber(15); // 15
  const num2 = verifyNumber(undefined); // 0
  const num3 = verifyNumber(null); // 0
  const num4 = verifyNumber(NaN); // 0
  const num5 = verifyNumber(0.05); // 0
  console.log(num1 + num2 + num3 + num4); // 15
}
