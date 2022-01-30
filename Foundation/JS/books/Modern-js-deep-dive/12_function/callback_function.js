{
  function repeat(n) {
    for (var i = 0; i < n; i++) {
      console.log(i);
    }
  }
  repeat(5);

  function repeat2(n) {
    for (var i = 0 ; i < n; i++) {
      if (i % 2) console.log(i);
    }
  }
  repeat2(5);
}
{
  function repeat(n, f) {
    for(var i = 0; i < n; i++){
      f(i);
    }
  }
  function logAll(n) {
    console.log(n);
  }
  repeat(5, logAll);
  function logOdds(n) {
    if (n % 2) console.log(n);
  }
  repeat(5, logOdds);
}
{
  // 콜백 함수를 사용한 이벤트 처리
  // myButton 버튼을 클릭하면 콜백 함수를 실행한다.
  // document.getElementById('myButton').addEventListener('click', function() {
  //   console.log('button clicked!');
  // });


  // 콜백 함수를 사용한 비동기 처리
  // setTimeout은 s초 후 한번만 실행
  setTimeout(function() {
    console.log('1초 경과');
  }, 1000)
  // setInterval은 s초 후 반복해서 실행
  // setInterval(function() {
  //   console.log('2초 경과');
  // }, 2000)
}
{
  // 콜백 함수를 사용하는 고차 함수 map
  let res = [1, 2, 3].map(function(item) {
    return item * 2;
  })
  console.log(res);

  res = [1, 2, 3].filter(function(item) {
    return item % 2;
  })
  console.log(res);

  res = [1, 2, 3].reduce(function(acc, cur) {
    return acc + cur;
  }, 0);
  console.log(res);
}