// 생성자 함수 이해하기
{
  function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
      console.log(student + '에게 ' + this.subject + '를 가르칩니다.');
    }
  };

  const jay = new Teacher('jay', 30, 'JavaScript');
  console.log(jay);
  jay.teach('bbo');

  // new를 빼고 생성자 함수를 호출할 경우 this는 전역 객체를 가리킨다.
  const jay2 = Teacher('jay2', 33, 'JavaScript ES5');
  console.log(jay2); // return값이 없기 때문에 undefined가 나온다.
  console.log(age);
}
{
  function Teacher(name, age, subject) {
    this.name = name;
    this.age = age;
    this.subject = subject;
    this.teach = function (student) {
      console.log(student + '에게 ' + this.subject + '를 가르칩니다.');
    }
    return this; // 객체를 반환
  };
  const jay3 = Teacher('jay3', 35, 'JavaScript ES6');

  console.log(jay3.name); // jay3

  const jay4 = new Teacher('jay4', 36, 'Java');
  console.log(jay4.name); // jay4
}

// 생성자 함수의 new 호출을 통한 객체 생성 과정
// 1. 빈 객체를 만든다.
// 2. 만든 빈 객체를 this에 할당한다.
// 3. 생성자 함수 바디의 코드를 실행한다.(this에 속성 및 메소드 추가)
// 4. 만든 빈 객체의 __proto__에 생성자 함수의 prototype 속성을 대입한다.
// 5. this를 생성자의 반환값으로 반환한다.