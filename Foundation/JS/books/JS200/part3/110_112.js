// 특정자리수에서 반올림하기 (round)
{
  const val = 573.926;
  console.log(Math.round(val));
  console.log(Math.round(val * 10) / 10);
  console.log(Math.round(val * 100) / 100);
  console.log(Math.round(val / 10) * 10);
  console.log(Math.round(val / 100) * 100);
  console.log();
}

// 특정자리수에서 올림하기 (ceil)
{
  const val = 573.926;
  console.log(Math.ceil(val));
  console.log(Math.ceil(val * 10) / 10);
  console.log(Math.ceil(val * 100) / 100);
  console.log(Math.ceil(val / 10) * 10);
  console.log(Math.ceil(val / 100) * 100);
  console.log();
}

// 특정자리수에서 내림하기 (floor)
{
  const val = 573.926;
  console.log(Math.floor(val));
  console.log(Math.floor(val * 10) / 10);
  console.log(Math.floor(val * 100) / 100);
  console.log(Math.floor(val / 10) * 10);
  console.log(Math.floor(val / 100) * 100);
  console.log();
}
