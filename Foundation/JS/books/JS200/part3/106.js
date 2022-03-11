// 객체 병합 확장하기 (assign)
{
  // Object.assign(반환될 객체, ... 병합될 다른 객체들);
  const obj = { one: 1, two: 2, three: 3 };
  const obj2 = { name: "탄이", age: 5, address: "Seoul" };
  const obj3 = { friends: ["혜림", "현아", "현일", "우림"] };

  const newObj = Object.assign({}, obj);
  // console.log(`newObj: ${newObj}`);
  console.log(newObj);
  const newObj2 = Object.assign({}, obj, obj2);
  // console.log(`newObj2: ${newObj2}`);
  console.log(newObj2);
  newObj.four = 4;
  console.log(newObj);

  console.log("\n");

  const newObj3 = Object.assign(obj, obj3);

  console.log(obj);
  console.log(newObj3);
}
