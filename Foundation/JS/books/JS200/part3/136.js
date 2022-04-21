// 일정 시간 후에 코드 실행하기 (setTimeout)
// 브라우저에선 Window 전역 객체, 서버사이드 Node.js에서는 Global 전역 객체 메소드로 정의되어 있다.
// 따라서 객체를 생성하거나 선언하지 않아도, setTimeout함수 그대로 사용 가능하다.
// setTimeout(callback function, 밀리세컨드)
{
  const timer = {
    run: function () {
      if (this.t) console.log("이미 실행된 타이머가 있습니다.");

      this.t = setTimeout(function () {
        console.log("1초 뒤에 실행됩니다.");
      }, 1000);
    },
    cancel: function () {
      if (this.t) clearTimeout(this.t);
      console.log("캔슬 됐습니다.");
      this.t = undefined;
    },
  };

  timer.run();
  timer.cancel();
  timer.run();
}
// 비동기 실행 확인
// setTimeout() 지연시간이 0초여도 밑의 log함수 다음으로 실행 스택에 쌓인다.
// 따라서 normal log가 출력되고 setTimeout function!이 실행 된다.
{
  setTimeout(() => {
    console.log("setTimeout function!"); // 2
  }, 0);

  console.log("normal log"); // 1
}
