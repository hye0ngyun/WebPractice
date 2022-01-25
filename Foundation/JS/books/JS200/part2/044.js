// 클로저 이해하기
// 클로저란 함수가 정의될 때의 렉시컬 환경을 기억하는 함수를 말한다.
// 자바에서 객체의 인스턴스마다 private한 지역변수처럼 관리할 수 있다. (내 생각)

function createCounterClosure() {
  let count = 0;
  return {
    increase: function () {
      count++;
    },
    getCount: function () {
      return count;
    }
  };
}

const counter1 = createCounterClosure();
const counter2 = createCounterClosure();

counter1.increase();
counter1.increase();
console.log(counter1.getCount()); // 2
counter2.increase()
console.log(counter2.getCount()); // 1