{
  // 화살표 함수
  let add = (x, y) => x + y;
  console.log(add(2, 5)); // 7
}
{
  let add = function(x, y) {
    console.log(arguments);
    return x + y;
  }
  add(2, 5, 10); // [Arguments] { '0': 2, '1': 5, '2': 10 }
}
{
  console.log(!!undefined); // false
  let add = function(a, b, c) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
  }
  console.log(add(1, 2, 3)); // 6
  console.log(add(1, 2)); // 3
  console.log(add(1)); // 1
  console.log(add()); // 0
}