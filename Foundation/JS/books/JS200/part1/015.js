var hometown = [
  { name: '진', city: '과천' },
  { name: '남준', place: '일산', city: '고양' },
  { name: '호석', place: '광주', city: '전라도' },
  { name: '지민', place: '부산', city: '경상도' },
];

console.log(`${hometown[2].name}의 고향은 ${hometown[2].city} ${hometown[2].place} 입니다.`);

var isHometown = function (h, name) {
  console.log(`함수가 실행되었습니다. ${h.city} 도시에서 ${name}을 찾습니다.`);

  if (h.name === name) {
    console.log(`${h.name}의 고향은 ${h.city} ${h.place} 입니다.`);
    return true;
  }
  return false;
}

var h;
// Array.shift() 배열의 요소를 앞에서부터 빼서 리턴한다.
while (h = hometown.shift()) {
  if (!h.name || !h.place || !h.city) continue;

  var result = isHometown(h, '호석');
  if (result) break;
}


console.log(hometown);
var i = 0;
var names = ['남준', '정국', '윤기', '호섭'];
var cities = ['경기', '부산', '대구', '광주'];
do {
  hometown[i] = { name: names[i], city: cities[i] };
  i++;
} while (i < 4);

console.log(hometown);