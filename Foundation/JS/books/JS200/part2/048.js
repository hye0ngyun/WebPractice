// 자바스크립트 객체지향 프로그래밍 이해하기
{
  const teacherJay = {
    name: '제이',
    age: 30,
    teachJavaScript: function (studnet) {
      studnet.gainExp();
    }
  };
  let studentAge = 20
  const studentBbo = {
    name: '뽀',
    studentAge,
    exp: 0,
    gainExp: function () {
      console.log(this, this.exp);
      this.exp++
    }
  }
  console.log(studentBbo.exp, studentBbo.gainExp(), studentBbo.exp);

  teacherJay.teachJavaScript(studentBbo);
  console.log(studentBbo.exp);
}
{
  const studentProto = {
    gainExp: function () {
      this.exp++
    }
  };
  const harin = {
    name: '하린',
    age: 10,
    exp: 0,
    __proto__: studentProto
  };

  const bbo = {
    name: '뽀',
    age: 20,
    exp: 10,
    __proto__: studentProto
  };



  bbo.gainExp();
  harin.gainExp();
  harin.gainExp();
  console.log(harin); // { name: '하린', age: 10, exp: 2 }
  console.log(bbo); // { name: '뽀', age: 20, exp: 11 }

  const test = {
    name: 'test',
    age: 30,
    __proto__: studentProto
  };
  console.log(test); // { name: 'test', age: 30 }
  test.gainExp();
  console.log(test); // { name: 'test', age: 30, exp: NaN }

  // 변수가 없는 상태에서 증감 연산자를 적용하면 NaN값이 나온다.
  console.log(undefined++);
}