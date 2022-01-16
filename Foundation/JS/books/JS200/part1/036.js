// arguments 객체 이해하기
function sum() {
  var total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log(arguments instanceof Array); // false
  console.log(arguments instanceof Object); // true
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  return total;
}

var sumOf1to3 = sum(1, 2, 3);
console.log(sumOf1to3);

function testArg() {
  var newArr = Array.prototype.slice.call(arguments);
  console.log(newArr);
  console.log(newArr.indexOf('b'));
  console.log(arguments.indexOf('b'));
}
testArg('a', 'b');