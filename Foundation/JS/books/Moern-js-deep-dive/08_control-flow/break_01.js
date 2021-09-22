{
  outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (i + j ===3) break outer;
      console.log(`inner [${i}, ${j}]`);
    }
  }
}

{
  var string = 'Hello World';
  var search = 'l';
  var index;

  for (var i = 0; string.length; i++){
    if (search === string[i]) {
      index = i;
      break;
    }
  }
  console.log(index);
}