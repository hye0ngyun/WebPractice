// this 이해하기
{
  console.log(this); // {}
  this.valueA = "a";
  console.log(this); // { valueA: 'a' }
  // console.log(valueA); // valueA is not defined
  this.valueB = "b";
  console.log(this.valueB); // b

  function checkThis() {
    console.log(this);
  }
  function checkThis2() {
    "use strict";
    console.log(this);
  }

  checkThis(); // Object
  checkThis2(); // undefined

  function Product(name, price) {
    this.name = name;
    this.price = price;
    console.log("Product inner", this);
  }
  const product1 = Product("가방", 2000);
  // const product2 = new Product("가방", 2000);
  // console.log(product1, product2); // undefined Product

  console.log(window.name);
  console.log(window.price); // 2000

  const product2 = {
    name: "가방2",
    price: 3000,
    getVAT() {
      console.log("product2 inner", this);
      return this.price / 10;
    },
  };
  const valueOfProduct2 = product2.getVAT();
  console.log(valueOfProduct2); // 300

  const calVAT = product2.getVAT; // 여긴 일반적인 함수 호출이 되어 this가 전역 객체를 가리킨다.
  const VAT2 = calVAT();
  console.log(VAT2); // 200

  const newCalVAT = calVAT.bind(product2); // this는 bind 메소드를 통해 전달한 인자값으로 변경할 수 있다.
  // this는 bind외에 call과 apply메소드 또한 this를 가리키는 값을 변경할 수 있다.
  const VAT3 = newCalVAT();
  console.log(VAT3); // 300

  // this.count = 0;
  const counter1 = {
    count: 0,
    addAfter1Sec() {
      setTimeout(function () {
        this.count += 1;
        console.log(this.count); // 메소드 안에서 중첩 함수로 함수가 작성됐을 때 내부 함수의 this는 전역 객체를 가리킨다.
        // 따라서 1초 뒤 this.count는 window.count로 해석돼 undefined에 값을 더하려고 해서 NaN이 출력된다.
      }, 1000);
    },
  };
  counter1.addAfter1Sec(); // NaN

  const counter2 = {
    count: 0,
    addAfter1Sec() {
      setTimeout(() => {
        this.count += 1;
        console.log(this.count); // 화살표 함수에서 this를 사용하면 this는 부모 환경의 this를 가리킨다.
        // 따라서 중첩된 함수로 작성됐을 때 화살표 함수를 사용하면 화살표 함수는 부모 함수의 this와 같다.
      }, 1000);
    },
  };
  counter2.addAfter1Sec(); // 1
}