// 배열 앞에 요소 추가하기 (unshift)
{
  const festa = ["mang"];
  console.log(festa);
  festa.unshift("chimmy");
  console.log(festa);
  festa.unshift("koya");

  festa.forEach((name) => console.log(name));

  console.log(festa);
  console.log(festa.shift());
  console.log(festa);
  console.log(festa.pop());
  console.log(festa);

  // 1. 배열 앞에 추가 unshift
  // 2. 배열 뒤에 추가 push
  // 3. 배열 앞에서 빼기 shift
  // 4. 배열 뒤에서 빼기 pop
}
