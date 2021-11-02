{
  {
    console.dir(add);
    console.dir(sub); // undefined
    console.dir(add(2, 5));
    console.dir(sub(2, 5)); // TypeError: sub is not a function

    function add(x, y) {
      return x + y;
    }
    var sub = function (x, y) {
      return x + y;
    }
  }
}