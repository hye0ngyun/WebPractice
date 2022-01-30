/*
for (속성명 in 반복할 대상) {

}
 */

var store = { snack: 1000, flower: 5000, beverage: 2000 };

// 반복할 대상이 객체라면 키값을 가져온다.
for (var item in store) {
  console.log(item); // snak - flower - beverage
  //  store에 item이 존재하는지 확인 (권장)
  if (!store.hasOwnProperty(item)) continue;

  console.log(item + '는 가격이 ' + store[item] + '입니다.');
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i in arr) {
  console.log(i); // 0 ~ 9 --- index(키값)
}
for (let i of arr) {
  console.log(i); // 1 ~ 10 --- value(요소값)
}