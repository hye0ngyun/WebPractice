// JSON 문자열을 JSON으로 변환하기(parse)
{
  // JSON.parse(값, [리플레이서])
  const jsonStr =
    '{"drama":"PET","season":2017,"casting":["koyuki","matsumoto jun"],"character":["sumire","momo"]}';

  console.log(typeof JSON.parse(jsonStr)); // object
  console.log(JSON.parse(jsonStr));
  console.log(
    JSON.parse(jsonStr, (key, val) => {
      if (key === "season") val = 2003;
      return val;
    })
  );

  console.log(JSON.parse("13.1"));
  console.log(typeof JSON.parse("13.1"));
  console.log(JSON.parse("true"));
  console.log(typeof JSON.parse("true"));
  // console.log(JSON.parse("kiss Carnival")); // string type can't parse Syntax Error
  console.log(JSON.parse("[2003, 2017]"));
  console.log(typeof JSON.parse("[2003, 2017]"));
  let arr = JSON.parse("[2003, 2017]");
  arr.push(2022);
  console.log(arr);
}
