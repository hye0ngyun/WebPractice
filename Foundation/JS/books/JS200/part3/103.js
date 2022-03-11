// 객체를 배열로 변환하기(entries)
{
  const obj = {
    movie: "sunny",
    music: "Like sugar",
    fnc: function () {},
    price: Infinity,
  };

  const arr = Object.entries(obj);
  console.log(arr);
  /*
  [
    [ 'movie', 'sunny' ],
    [ 'music', 'Like sugar' ],
    [ 'fnc', [Function: fnc] ],
    [ 'price', Infinity ]
  ]
  */
}
