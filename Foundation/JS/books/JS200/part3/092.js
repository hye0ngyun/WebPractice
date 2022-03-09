// 배열 정렬하기
{
  // 배열.sort(function(a, b) {
  // return 비교값
  // })
  const arr1 = [5, 4, 3, 2, 1];
  console.log(arr1.sort()); // 1,2,3,4,5
  console.log(arr1.sort((a, b) => b - a)); // 5,4,3,2,1

  var items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  items.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });
  console.log(items);
  items.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // 이름이 같을 경우
    return 0;
  });
  console.log(items); // 값자체가 바뀜
}
