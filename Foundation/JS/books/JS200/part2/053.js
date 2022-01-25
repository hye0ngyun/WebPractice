// 클래스 정적 메소드와 속성 정의하기
// 정적(static) 메소드와 속성은 클래스를 인스턴스화 하지 않고 클래스명으로 호출 할 수 있는 메소드와 속성을 말한다.
{
  class Product {
    static build(name, price) {
      const id = Math.floor(Math.random() * 1000);
      return new Product(id, name, price);
    }

    static getTaxPrice(product) {
      return (product.price * 0.1) + product.price;
    }
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  class DeposableProduct extends Product {
    depose() {
      this.deposed = true;
    }
  }

  const gum = Product.build('껌', 1000);
  console.log(gum);

  const clothes = new DeposableProduct(1, '옷', 2000);
  const taxPrice = DeposableProduct.getTaxPrice(clothes);
  console.log(taxPrice);


  class ProductWithCode {
    static get CODE_PREFIX() {
      return 'PRODUCT-';
    }

    constructor(id) {
      this.id = id;
      this.code = ProductWithCode.CODE_PREFIX + id;
      // this.code = this.CODE_PREFIX + id; // 에러
    }
  }

  const product1 = new ProductWithCode('001');
  console.log(ProductWithCode.CODE_PREFIX);
  console.log(product1.code);
}