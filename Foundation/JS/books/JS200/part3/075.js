// 특정 문자열 위치 확인하기1 (indexOf)
// 앞에서부터 첫 번째 요소 인덱스 반환
{
  const str = "Carpe diem, seize the day";
  console.log(`"e"는 ${str.indexOf("e")} 번째 인덱스에 있습니다.`);
  console.log(`"c"는 ${str.indexOf("c")} 번째 인덱스에 있습니다.`);
  console.log(`"C"는 ${str.indexOf("C")} 번째 인덱스에 있습니다.`);
  console.log(`"se"는 ${str.indexOf("se")} 번째 인덱스에 있습니다.`);

  const arr = ["Carpe", "diem", "seize", "the", "day"];
  const howManyHasE = (arr) => {
    let count = 0;
    arr.forEach((element) => {
      if (element.indexOf("e") != -1) {
        count += 1;
      }
    });
    return count;
  };

  console.log(`${arr}에 "e"가 있는 요소는 모두 ${howManyHasE(arr)}개 입니다.`);
}
