// 문자열을 특정 구분자에 의해 배열로 나누기 (split)
{
  const captitals = `first line is start
  Second line is start
  one, two, three
  and 1, 2, 3`;

  console.log(captitals.split("\n"));
  captitals.split("\n").forEach((s) => {
    const capital = s.split(",")[0];
    const country = s.split(",")[1];
    console.log(`${capital} is in ${country}`);
  });
}
