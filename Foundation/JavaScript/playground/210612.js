console.log(5 == 5);
console.log(5 % 2 !== 1 ? '짝수' : '홀수');
console.log(5 % 2 ? '짝수' : '홀수');
console.log(typeof a);

// 블록문
{
    var foo = 10;
    console.log(foo);
}

// 제어문
var x = 0;
while (x < 20) {
    x++
}
console.log(x);

// 함수 선언문
function sum(x, y){
    return x + y
}
console.log(sum(1,2));

let month = 1;
let season;

switch (month) {
    case 2:
    case 3:
    case 4:
        season = 'Spring'
        break;
    case 5:
    case 6:
    case 7:
        season = 'Summer'
        break;
    case 8:
    case 9:
    case 10:
        season = 'Atum'
        break;
    case 11:
    case 12:
    case 1:
        season = 'Winter'
        break;
    default:
        break;
}
console.log(typeof season);
console.log(`your month: ${month}, your season: ${season}`);

// parseInt: int 형변환
a = parseInt(prompt());

console.log(typeof a);