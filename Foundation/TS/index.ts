// 타입을 만드는 경우 보통 대문자로 시작
type Name = string | number;
let 이름: Name = 'kim';
이름 = 123;

function 함수(x: number): number {
  return x * 2;
}
// 함수('123');

// 무조건 첫 번째는 number, 두 번째는 boolean
// Array에 쓸 수 있는 tuple 타입
type Member = [number, boolean];
let john: Member = [123, true];


// Object에 타입지정해야할 속성이 너무 많으면
{
  type MemberObject = {
    [key: string]: string
  };
  let john: MemberObject = {name: 'kim'};
}

{
  class User {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
}