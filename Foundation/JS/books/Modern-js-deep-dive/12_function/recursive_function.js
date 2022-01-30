{
  function countdown(n) {
    for (let i = n; i >= 0; i--) {
      console.log(i);
    }
  }
  // countdown(10);
  
  function countdown_rec(n) {
    if (n <= 0) return;
    console.log(n);
    countdown_rec(n-1)
  }
  // countdown_rec(10);
}
{
  function factorial(n) {
    if (n <= 0) return 1;
    return factorial(n-1) * n;
  }
  console.log(factorial(5));
}