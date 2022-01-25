// Get, Set을 통한 속성 접근 관리하기
{
  let user = {};
  Object.defineProperty(user, 'age', {
    get: function () {
      return this._age; // 속성 이름에 _를 붙이는 것은 암묵적으로 비공개(private) 속성임을 나타낸다.
    },
    set: function (age) {
      if (age < 0) {
        console.error('0보다 작은값은 올 수 없습니다.');
      } else {
        this._age = age;
      }
    },
    enumerable: true
  });
  console.log(user.age);
  user.age = 10;
  console.log(user.age);
  user.age = -1;
  console.log(user._age, user.age); // 10 10

  let user2 = {
    get name() {
      return this._name;
    },
    set name(val) {
      if (val.length < 3) {
        throw new Error('3자 이상이어야 합니다.');
      }
      this._name = val;
    }
  };
  user2.name = 'harin';
  console.log(user2.name);
  user2.name = 'ha';
}
