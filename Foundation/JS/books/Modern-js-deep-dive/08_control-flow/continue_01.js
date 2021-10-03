{
  var string = 'Hello World';
  var search = 'l';
  var count = 0;

  for (var i = 0; i < string.length; i++) {
    if (search !== string[i]) continue;
    count++;
  }

  console.log(count);

  // String.prototype.match 메서드를 사용해도 동일한 동작을 할 수 있다.
  const regexp = new RegExp(search, 'g');
  // string.match(regexp): ['l', 'l', 'l']
  console.log(string.match(regexp).length);
}