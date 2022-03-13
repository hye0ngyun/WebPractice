// JSON을 문자열로 변환하기 (stringify)
{
  // JSON.stringify(값, [리플레이서], [공백 개수])
  const testStringify = {
    stringifiedNum: JSON.stringify(13.1),
    stringifiedStr: JSON.stringify("kiss Carnival"),
    stringifiedBln: JSON.stringify(false),
    stringifiedArr: JSON.stringify([2003, 2017]),
  };

  console.log(testStringify);

  for (let key in testStringify) {
    console.log(`-----${key}-----`);
    console.log(typeof testStringify[key]);
    console.log(testStringify[key]);
  }

  console.log(`-----stringiifyObj-----`);
  const obj = {
    drama: "PET",
    season: 2017,
    casting: ["koyuki", "matsumoto jun"],
    character: ["sumire", "momo"],
  };

  console.log(typeof JSON.stringify(obj));
  console.log(JSON.stringify(obj));
  console.log(JSON.stringify(obj, ["drama", "season"]));
  console.log(JSON.stringify(obj, null, 4));
  console.log(JSON.stringify(obj, null, 2));
  console.log(
    JSON.stringify(
      obj,
      (key, val) => {
        if (key === "season") return 2003;
        return val;
      },
      4
    )
  );
}
