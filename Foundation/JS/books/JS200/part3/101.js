// 객체에서 키만 추출하기 (keys)
{
  const obj = {
    movie: "sunny",
    music: "Like sugar",
    fnc: function () {},
    price: Infinity,
  };

  const arr = Object.keys(obj);
  console.log(arr); // [ 'movie', 'music', 'fnc', 'price' ]
}
