// 랜덤값 구하기 (random)
{
  // Math.random() -> 0부터 1까지의 랜덤 실수
  console.log(Math.round(Math.random() * 100));
  console.log(Math.round(Math.random() * (100 - 10 + 1) + 10));
  let flag = true;
  while (flag) {
    const randomNum = Math.round(Math.random() * (100 - 10) + 10);
    if (randomNum === 100) {
      console.log(randomNum);
      flag = false;
    }
  }
  const generateRandom = (min, max) => {
    return (randomNum = Math.round(Math.random() * (max - min) + min));
  };
  for (let i = 0; i < 5; i++) {
    console.log(generateRandom(1, 10));
  }
  for (let i = 0; i < 5; i++) {
    console.log(generateRandom(10, 100));
  }
}
