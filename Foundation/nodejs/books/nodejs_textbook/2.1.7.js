{
  // 프로미스
  const condition = true;
  const promise = new Promise((resolve, reject) => {
    if (condition) {
      resolve('성공');
    } else {
      reject('실패');
    }
  });
  // 다른 코드가 들어갈 수 있음
  promise
    .then((message) => {
      console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
      console.log(error); // 실패(reject)한 경우 실행
    })
    .finally(() => { // 끝나고 무조건 실행
      console.log('무조건');
    })
}
{
  // 프로미스
  const condition = true;
  const promise = new Promise((resolve, reject) => {
    if (condition) {
      resolve('성공');
    } else {
      reject('실패');
    }
  });
  
  promise
    .then((message) => {
      console.log(message); // 성공
      return new Promise((resolve, reject) => {
        resolve(message + " 2번째 then")
      })
    })
    .then((message2) => {
      console.log(message2); // 성공 2번째 then
      return new Promise((resolve, reject) => {
        resolve(message2 + " 3번째 then")
      })
    })
    .then((message3) => {
      console.log(message3); // 성공 2번째 then 3번째 then
    })
    .catch((error) => {
      console.log(error); // 실패(reject)한 경우 실행
    })
    .finally(() => { // 끝나고 무조건 실행
      console.log('무조건'); // 무조건
    })

    // then에서 new Promise를 return해야 다음 then에서 받을 수 있다.
    // 이 것을 활용해서 콜백을 프로미스로 바꿀 수 있다.
}
{
  // 콜백 패턴 1
  function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => { // 첫 번째 콜백
      if (err) {
        return console.error(err);
      }
      user.name = 'zero';
      user.save((err) => { // 두 번째 콜백
        if(err) {
          return console.error(err);
        }
        Users.findOne({ gender: 'm' }, (err, user) => { // 세 번째 콜백
          return;
        })
      })
    })
  }
}
{
  // 콜백 패턴 1을 프로미스로 바꾼 것
  function findAndSaveUser(Users) {
    Users.findOne({})
      .then((user) => {
        user.name = 'zero'; 
        return user.save();
      })
      .then((user) => {
        return Users.findOne({ gender: 'm' });
      })
      .then((user) => {
        return;
      })
      .catch(err => {
        console.error(err);
      });
  }
}
{
  // 여러 프로미스를 한 번에 실행하는 방법
  console.log("여러 프로미스 실행");
  const promise1 = Promise.resolve('성공1'); // 즉시 resolve하는 프로미스를 만드는 방법
  const promise2 = Promise.resolve('성공2');
  const promise3 = Promise.reject('실패1');
  Promise.all([promise1, promise2])
    .then((result) => {
      console.log(result); // [ '성공1', '성공2' ]
    })
    .catch((error) => {
      console.error(error);
    });

  Promise.all([promise1, promise2, promise3])
    .then((result) => {
      console.log(result); // 실패1
    })
    .catch((error) => {
      console.error(error);
    });

  // 프로미스가 여러 개 있을 때 Promise.all에 넣으면 모두 reslove될 때 까지 기다렸다가 then으로 넘어간다.
  // result 매개변수에 각각의 프로미스 결과값이 배열로 들어 있다.
  // Promise중 하나라도 reject가 되면 catch로 넘어간다.
}