// ES6의 향상된 객체 문법 - 속성 계산명(computed property name)

var obj = {};
for (var i = 0; i < 4; i++) {
  obj['key' + i] = i;
};
console.log(obj);

var porfile = 'chloe:30'
var person = {
  [porfile]: true,
  [porfile.split(':')[0]]: porfile.split(':')[1],
};
console.log(person);