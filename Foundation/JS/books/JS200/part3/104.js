// 객체 변경되지 않도록 하기 (freeze)
{
  let obj = {};
  obj.title = "IDOL";
  Object.freeze(obj);

  console.log(obj); // title: 'IDOL'

  const changeUntilNum = (obj, num) => {
    "use strict";

    while (true) {
      console.log(obj);

      if (obj.age >= num) {
        obj = Object.freeze(obj);
      }
      obj.age++;
    }
  };

  let profile = { name: "지연", age: 25 };
  changeUntilNum(profile, 30); // age가 30까지 상승하고 use strict로 인해 freeze된 obj의 값에 재할당 시도한 경우 에러 발생
}
