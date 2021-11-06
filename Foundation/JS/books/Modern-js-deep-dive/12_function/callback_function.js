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