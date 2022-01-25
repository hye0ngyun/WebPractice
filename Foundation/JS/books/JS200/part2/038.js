// 함수 나머지 매개변수 이해하기
// arguments 객체와 나머지 매개변수와의 큰 차이점은 
// arguments: 객체
// restParameter: 배열

function sum(...args) {
  var total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  console.log(`args instanceof Array: ${args instanceof Array}, aruments instanceof arguments: ${arguments instanceof Array}`);
  // args instanceof Array: true, aruments instanceof arguments: false
  return total;
}


console.log(sum(1, 2, 3));

function sum2(a, b, ...others) {
  var total = a + b;
  for (var i = 0; i < others.length; i++) {
    total += others[i];
  }
  console.log(others);
  return total;
}
console.log(sum2(1, 2));
console.log(sum2(1, 2, 3, 4));