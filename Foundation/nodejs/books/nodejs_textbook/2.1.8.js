{
  // async/await
  async function findAndSaveUser(Users) {
    let user = await Users.findOne({});
    user.name = 'zero';
    user = await user.save();
    user = await Users.findOne({ gender: 'm' });
  }
}
{
  // reject가 있는 경우
  async function findAndSaveUser(Users) {
    try {
      let user = await Users.findOne({});
      user.name = 'zero';
      user = await user.save();
      user = await Users.findOne({ gender: 'm' });
    } catch (error) {
      console.error(error);
    }
  }
  // 프로미스의 catch 메서드처럼 try/catch문의 catch가 에러를 처리한다.
}
{
  // 화살표 함수와 함께 사용하는 async
  const findAndSaveUser = async (Users) => {
    try {
      let user = await Users.findOne({});
      user.name = 'zero';
      user = await user.save();
      user = await Users.findOne({ gender: 'm' });
    } catch (error) {
      console.error(error);
    }
  }
}
{
  // for문과 함께 async를 써서 프로미스를 순차적으로 실행
  const promise1 = Promise.resolve('성공1');
  const promise2 = Promise.resolve('성공2');
  (async () => {
    for await (promise of [promise1, promise2]) {
      console.log(promise);
    }
  })();
  console.log(123);

  // async 함수의 반환값은 항상 Promise로 감싸진다.
  // 따라서 실행 후에 then을 붙이거나 또 다른 async함수 안에서 await를 붙여서 처리할 수 있다.
}
{
  async function findAndSaveUser(Users) {
  }
  // ex1
  findAndSaveUser().then(() => {});
  // ex2
  async function other() {
    const result = await findAndSaveUser();
  }

}