// 클래스 정의하기

{
  class Cart {
    // 생성자
    constructor() {
      this.store = {};
    }

    addProduct(product) {
      this.store[product.id] = product;
    }

    getProduction(id) {
      return this.store[id];
    }
  }

  const cart1 = new Cart();
  console.log(cart1); // Cart { store: {} }
  cart1.addProduct({ id: 1, name: '노트북' });
  console.log(cart1);

  const p = cart1.getProduction(1);
  console.log(p);
}