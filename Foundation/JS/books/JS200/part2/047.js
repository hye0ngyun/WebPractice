// 화살표 함수 이해하기
{
  const double = x => x + x;
  console.log(double(10)); // 20

  const add = (a, b) => a + b;
  console.log((add(1, 2))); // 3

  const printArguments = () => {
    console.log(typeof arguments, arguments);
  }
  printArguments(1, 2, 3);

  const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  };
  console.log(sum(1, 2, 3)); // 6

  setTimeout(() => {
    console.log('화살표 함수');
  }, 10)
}