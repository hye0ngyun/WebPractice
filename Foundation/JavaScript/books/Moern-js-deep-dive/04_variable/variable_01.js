// score 호이스팅돼 선언과 undeifned로 할당됨

console.log(score); // undefined - 메모리공간A

score = 80; // score에 80으로 할당함 - 메모리공간 B
var score; // 변수 선언

console.log(score); // 80



