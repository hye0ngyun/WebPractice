// 일정 시간마다 코드 실행하기 (setInterval)
{
  let count = 0;
  // 1초마다 콜백함수 실행
  const timer = setInterval(() => {
    console.log(`${count++}번째 함수가 실행됩니다.`);
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
  }, 5000);
}
