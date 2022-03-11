// 객체에서 값만 추출하기 (values)
{
  const obj = {
    movie: "sunny",
    music: "Like sugar",
    fnc: function () {},
    price: Infinity,
  };

  const arr = Object.values(obj);
  console.log(arr); // [ 'sunny', 'Like sugar', [Function: fnc], Infinity ]
}
